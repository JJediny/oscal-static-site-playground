import React from 'react'
import raw from '../../content/oscal_component_schema.json'
import OscalPage from '../components/oscal-page'

const OscalComponent = () => (
  <OscalPage model={raw['component-definition']} modelLabel="Component Definition" />
)

export default OscalComponent