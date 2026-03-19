import React from 'react'
import raw from '../../content/oscal_ssp_schema.json'
import OscalPage from '../components/oscal-page'

const OscalSSP = () => (
  <OscalPage model={raw['system-security-plan']} modelLabel="System Security Plan (SSP)" />
)

export default OscalSSP