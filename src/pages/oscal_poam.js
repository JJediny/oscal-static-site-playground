import React from 'react'
import raw from '../../content/oscal_poam_schema.json'
import OscalPage from '../components/oscal-page'

const OscalPoam = () => (
  <OscalPage model={raw['plan-of-action-and-milestones']} modelLabel="Plan of Action and Milestones (POA&M)" />
)

export default OscalPoam