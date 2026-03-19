/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const fs = require('fs');
const { paginate } = require('gatsby-awesome-pagination');

/**
 * Build-time validation: validate OSCAL content JSON files against their structural
 * invariants using AJV. Failures are reported as warnings — the build is not aborted
 * so that partial/draft content can still be previewed.
 */
exports.onPreInit = ({ reporter }) => {
  const Ajv = require('ajv');
  const addFormats = require('ajv-formats');
  const ajv = new Ajv({ allErrors: true });
  addFormats(ajv);

  /** Minimal shared schema for the OSCAL metadata block */
  const metadataSchema = {
    type: 'object',
    required: ['title', 'last-modified', 'oscal-version'],
    properties: {
      title: { type: 'string', minLength: 1 },
      version: { type: 'string' },
      'oscal-version': { type: 'string', pattern: '^\\d+\\.\\d+' },
      'last-modified': { type: 'string', format: 'date-time' },
      published: { type: 'string', format: 'date-time' },
    },
  };

  /** Map from content filename prefix → root key inside that JSON file */
  const contentFiles = [
    { file: 'oscal_ssp_schema.json',                rootKey: 'system-security-plan' },
    { file: 'oscal_catalog_schema.json',             rootKey: 'catalog' },
    { file: 'oscal_profile_schema.json',             rootKey: 'profile' },
    { file: 'oscal_component_schema.json',           rootKey: 'component-definition' },
    { file: 'oscal_poam_schema.json',                rootKey: 'plan-of-action-and-milestones' },
    { file: 'oscal_assessment-plan_schema.json',     rootKey: 'assessment-plan' },
    { file: 'oscal_assessment-results_schema.json',  rootKey: 'assessment-results' },
  ];

  const validateMetadata = ajv.compile(metadataSchema);
  const contentDir = path.join(__dirname, 'content');

  let hasWarnings = false;

  for (const { file, rootKey } of contentFiles) {
    const filePath = path.join(contentDir, file);
    if (!fs.existsSync(filePath)) {
      reporter.warn(`[OSCAL validation] File not found: ${file}`);
      hasWarnings = true;
      continue;
    }

    let parsed;
    try {
      parsed = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (err) {
      reporter.warn(`[OSCAL validation] Failed to parse ${file}: ${err.message}`);
      hasWarnings = true;
      continue;
    }

    const root = parsed[rootKey];
    if (!root) {
      reporter.warn(
        `[OSCAL validation] ${file}: expected root key "${rootKey}" not found. ` +
          `Found keys: ${Object.keys(parsed).join(', ')}`
      );
      hasWarnings = true;
      continue;
    }

    if (!root.uuid) {
      reporter.warn(`[OSCAL validation] ${file} (${rootKey}): missing required field "uuid"`);
      hasWarnings = true;
    }

    if (!root.metadata) {
      reporter.warn(`[OSCAL validation] ${file} (${rootKey}): missing required field "metadata"`);
      hasWarnings = true;
      continue;
    }

    const valid = validateMetadata(root.metadata);
    if (!valid) {
      const errors = validateMetadata.errors
        .map((e) => `  ${e.instancePath || '(root)'} ${e.message}`)
        .join('\n');
      reporter.warn(
        `[OSCAL validation] ${file} (${rootKey}) metadata validation errors:\n${errors}`
      );
      hasWarnings = true;
    }
  }

  if (!hasWarnings) {
    reporter.info('[OSCAL validation] All content files passed structural validation ✓');
  }
};

/**
 * Export the full Gatsby GraphQL schema as an introspection JSON file after
 * every build. The file is written to public/schema.json so the static
 * GraphiQL explorer page can load it without a live server.
 */
exports.onPostBuild = async ({ graphql, reporter }) => {
  const { getIntrospectionQuery } = require('graphql');

  const result = await graphql(getIntrospectionQuery());

  if (result.errors && result.errors.length) {
    reporter.warn(
      '[schema export] Introspection errors: ' +
        result.errors.map((e) => e.message).join(', ')
    );
    return;
  }

  const outPath = path.join(__dirname, 'public', 'schema.json');
  fs.writeFileSync(outPath, JSON.stringify({ data: result.data }, null, 2));
  reporter.info('[schema export] Introspection schema written to public/schema.json ✓');
};

// Adds the source "name" from the filesystem plugin to the markdown remark nodes
// so we can filter by it.
// During HTML builds some node-only modules (iconv-lite, tr46, encoding, whatwg-url)
// can cause runtime errors. Provide lightweight aliases for the build-html stages
// so static HTML generation doesn't execute those modules.
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'iconv-lite': require.resolve('./empty-module.js'),
          'iconv-lite/encodings': require.resolve('./empty-module.js'),
          'iconv-lite/lib/streams': require.resolve('./empty-module.js'),
          encoding: require.resolve('./empty-module.js'),
          tr46: require.resolve('./empty-module.js'),
          'whatwg-url': require.resolve('./empty-module.js'),
        },
      },
    });
  }
};
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // We only care about MarkdownRemark content.
  if (node.internal.type !== 'MarkdownRemark') {
    return;
  }

  const fileNode = getNode(node.parent);

  createNodeField({
    node,
    name: 'sourceName',
    value: fileNode.sourceInstanceName,
  });
  
  createNodeField({
    node,
    name: 'name',
    value: fileNode.name,
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  await createBlogPages(createPage, graphql);
  await createMarkdownPages(createPage, graphql);

  // Write schema.json so the static GraphiQL explorer works in both dev and build.
  // Written to static/ so gatsby develop serves it as a static asset at /schema.json.
  // onPostBuild overwrites the copy in public/ for production builds.
  try {
    const { getIntrospectionQuery } = require('graphql');
    const result = await graphql(getIntrospectionQuery());
    if (!result.errors || !result.errors.length) {
      const schemaJson = JSON.stringify({ data: result.data }, null, 2);
      // static/ → served by dev server; also copied into public/ during build
      fs.writeFileSync(path.join(__dirname, 'static', 'schema.json'), schemaJson);
      reporter.info('[schema export] schema.json written to static/ ✓');
    }
  } catch (e) {
    reporter.warn('[schema export] Could not write schema.json: ' + e.message);
  }
};

async function createBlogPages(createPage, graphql) {
  const blogTemplate = path.resolve('./src/templates/blog.js');
  const postTemplate = path.resolve('./src/templates/blog-post.js');
  const posts = await markdownQuery(graphql, 'blog');

  // Create pagination index page
  paginate({
    createPage,
    items: posts,
    itemsPerPage: 3,
    pathPrefix: '/blog',
    component: blogTemplate,
  });

  // Create individual pages
  posts.forEach(({ node }) => {
    createPage({
      path: 'blog/' + node.fields.name,
      component: postTemplate,
      context: {
        name: node.fields.name
      },
    });
  });
}

async function createMarkdownPages(createPage, graphql) {
  const pageTemplate = path.resolve('./src/templates/documentation-page.js');
  const pages = await markdownQuery(graphql, 'documentation');

  pages.forEach(({ node }) => {
    createPage({
      path: node.fields.name,
      component: pageTemplate,
      context: {
        name: node.fields.name
      },
    });
  });
}

async function markdownQuery(graphql, source) {
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { fields: { sourceName: { eq: "${source}" } } }) {
        edges {
          node {
            fields {
              name
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
  }

  return result.data.allMarkdownRemark.edges;
}
