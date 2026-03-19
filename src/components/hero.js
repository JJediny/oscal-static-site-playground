import React from 'react';
import { withPrefix } from 'gatsby';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Hero = () => (
  <section className="usa-hero">
    <div className="grid-container">
      <div className="usa-hero__callout">
        <h2 className="usa-hero__heading">
          <span className="usa-hero__heading--alt">OSCAL</span>Static Site Playground
        </h2>
        <p>
          Explore the GraphQL schema powering this site&#39;s OSCAL content — browse
          all types, fields, and relationships without a live server.
        </p>
        <a className="usa-button" href={withPrefix('/___graphql/')}>
          GraphiQL Schema Explorer
        </a>
        {process.env.NODE_ENV === 'development' && (
          <a className="usa-button usa-button--outline margin-left-1" href="/___graphql">
            GraphiQL (dev live)
          </a>
        )}
      </div>
    </div>
  </section>
);

export default Hero;
