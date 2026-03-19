import React from 'react'
import raw from '../../content/oscal_catalog_schema.json'
import OscalPage from '../components/oscal-page'

const OscalCatalog = () => (
  <OscalPage model={raw['catalog']} modelLabel="Catalog" />
)

export default OscalCatalog