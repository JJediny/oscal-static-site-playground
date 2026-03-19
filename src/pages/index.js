import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';

const IndexPage = ({ data }) => {
  const docs = data?.allMarkdownRemark?.edges || [];

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Tagline />
      <Highlights />

      <div className="grid-container usa-section">
        <h2>Documentation Pages</h2>
        <ul>
          {docs.map(({ node }) => (
            <li key={node.fields.name}>
              <h3>
                <Link to={`/${node.fields.name}/`}>{node.frontmatter.title}</Link>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexDocumentationQuery {
    allMarkdownRemark(filter: { fields: { sourceName: { eq: "documentation" } } }) {
      edges {
        node {
          fields {
            name
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
