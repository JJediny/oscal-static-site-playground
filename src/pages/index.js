import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';

const OSCAL_PAGES = [
  { path: '/oscal_ssp/', label: 'System Security Plan (SSP)' },
  { path: '/oscal_profile/', label: 'Profile' },
  { path: '/oscal_catalog/', label: 'Catalog' },
  { path: '/oscal_component/', label: 'Component Definition' },
  { path: '/oscal_poam/', label: 'Plan of Action & Milestones (POA&M)' },
  { path: '/oscal_assessment-plan/', label: 'Security Assessment Plan (SAP)' },
  { path: '/oscal_assessment-results/', label: 'Security Assessment Results (SAR)' },
];

const IndexPage = ({ data }) => {
  const docs = data?.allMarkdownRemark?.edges || [];

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Tagline />
      <Highlights />

      <div className="grid-container usa-section">
        <h2>OSCAL Documents</h2>
        <div className="grid-row grid-gap-md">
          {OSCAL_PAGES.map(({ path, label }) => (
            <div key={path} className="tablet:grid-col-6 desktop:grid-col-4 margin-bottom-3">
              <div className="usa-card">
                <div className="usa-card__container">
                  <div className="usa-card__header">
                    <h3 className="usa-card__heading">
                      <Link to={path}>{label}</Link>
                    </h3>
                  </div>
                  <div className="usa-card__body">
                    <p className="font-body-xs text-base-dark">
                      View metadata, roles, parties, and model sections for this OSCAL document.
                    </p>
                  </div>
                  <div className="usa-card__footer">
                    <Link to={path} className="usa-button usa-button--outline">
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="margin-top-5">Documentation Pages</h2>
        <ul className="usa-list">
          {docs.map(({ node }) => (
            <li key={node.fields.name}>
              <Link to={`/${node.fields.name}/`}>{node.frontmatter.title}</Link>
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
