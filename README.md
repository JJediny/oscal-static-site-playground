[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=18F/federalist-uswds-gatsby)](https://dependabot.com)

# U.S. Web Design System + Gatsby + OSCAL

This site is developed using the [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov) and is focused on providing developers a starter kit and reference implementation for Federalist websites.

This code uses the [Gatsby](https://www.gatsbyjs.org/) framework and built with Javascript and [React](https://reactjs.org/). 

## 🖐Previous Versions 🖐

If you're looking for the original starter that included a more integrated approach to using USWDS with React, it is still available [here](https://github.com/18F/federalist-uswds-gatsby/tree/v1), but will not be maintained.

## Features

✅ [USWDS v3](https://designsystem.digital.gov) javascript, styles, images, and fonts are included by default. Styles can be customized with either SASS or CSS in `src/styles/index.scss`.

✅ Publish blog posts using Markdown. Any markdown files in the `src/blog-posts` directory will be turned into pages at `/blog/<path>` in the application using the `src/templates/blog-post.js` template, where `<path>` is specified in the frontmatter of the file. An index of all posts will be displayed at `/blog` using the `src/templates/blog.js` template.

✅ Publish documentation pages using Markdown. Any markdown files in the `src/documentation-pages` directory will be turned into pages at `/<path>` in the application using the `src/templates/documentation-page.js` template, where `<path>` is specified in the frontmatter of the file. Side navigation for documentation pages can be controlled by setting `sidenav: true` or `sidenav: false` to your page front matter.

✅ Publish custom pages using React. Any javascript files in the `src/pages` directory will be turned into pages at `/<filename>.html`, where `<filename>` is the actualy name of the file.

✅ [Search.gov](https://search.gov) integration - Once you have registered and configured Search.gov for your site by following [these instructions](https://federalist.18f.gov/documentation/search/), add your "affiliate" and "access key" to `gatsby-config.js`. Ex.

```
searchgov: {

  // You should not change this.
  endpoint: 'https://search.usa.gov',

  // replace this with your search.gov account
  affiliate: 'federalist-uswds-example',

  // replace with your access key
  access_key: 'xX1gtb2RcnLbIYkHAcB6IaTRr4ZfN-p16ofcyUebeko=',

  // this renders the results within the page instead of sending to user to search.gov
  inline: true,
}
```

The logic for using Search.gov can be found in the `src/components/search-form.js` component and supports displaying the results inline or sending the user to Search.gov the view the results. This setting defaults to "inline" but can be changed by setting `searchgov: { inline: false }` in `gatsby-config.js`.

✅ [Digital Analytics Program (DAP)](https://digital.gov/services/dap/) integration - Once you have registered your site with DAP add your "agency" and optionally, `subagency` to `gatsby-config.js` and uncomment the appropriate lines. Ex.

```
dap: {
    // agency: 'your-agency',

    // Optional
    // subagency: 'your-subagency',
},
```

✅ [Google Analytics](https://analytics.google.com/analytics/web/) integration - If you have a Google Analytics account to use, add your "ua" to `gatsby-config.js` and uncomment the appropriate lines. Ex.

```
ga: {
    // ua: 'your-ua',
},
```

✅ Out-of-the-box performant caching strategy following [Gatsby recommended practices](https://www.gatsbyjs.org/docs/caching/) via `federalist.json`. See [Federalist Documentation](https://federalist.18f.gov/documentation/) for more information on `federalist.json`.

## Getting Started

### Installation for development
    $ git clone https://github.com/../..
    $ cd ..

### Running the application

#### With locally installed `node`
    $ pnpm install
    $ pnpm run develop

To build but not serve the site, run `pnpm run build`.

#### With Docker
    $ docker-compose run pnpm install
    $ docker-compose up

To build but not serve the site, run:
```
docker-compose run pnpm run build
```

Open your web browser to [localhost:8000](http://localhost:8000/) to view your
site.

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## GraphQL Introspection Test

To inspect your site's GraphQL schema at `http://localhost:8000/___graphql`, open that URL and paste the following query into the left-hand editor, then press the "Play" ▶︎ button.

```graphql
query IntrospectionQuery {
    __schema {
        queryType { name }
        mutationType { name }
        types {
            name
            kind
            description
            fields(includeDeprecated: true) {
                name
                description
                args {
                    name
                    type { name kind ofType { name kind } }
                }
                type { name kind ofType { name kind } }
            }
        }
    }
}
```

This will return the full schema (types, fields, and arguments) which you can inspect to validate your GraphQL setup.

## Technologies you should be familiarize yourself with

- [Gatsby](https://www.gatsbyjs.org/) - The framework that does all the magic
- [React](https://reactjs.org/) - The view library
- [GraphQL](https://graphql.org/) - The data layer used by Gatsby
- [node](https://nodejs.org/en/) - Javascript runtime
- [npm](https://www.npmjs.com/) - Javascript dependency manager
- [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov)

### 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## Things to Note

- Always use the `Link` component provided by Gatsby for internal links, see previous note.
- Importing USWDS images can be done straight from their local location in `node_modules`. See [Banner.js](https://github.com/18F/federalist-uswds-gatsby/blob/main/src/components/banner.js) for an example.
- This is built from the default [Gatsby default starter](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-default/), you can view the documentation there to see more of what is included.

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the [CC0 1.0
> Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication.
> By submitting a pull request, you are agreeing to comply with this waiver of
> copyright interest.
