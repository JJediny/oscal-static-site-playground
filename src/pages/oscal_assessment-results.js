import React from 'react'
import raw from '../../content/oscal_assessment-results_schema.json'
import OscalPage from '../components/oscal-page'

const OscalAssessmentResults = () => (
  <OscalPage model={raw['assessment-results']} modelLabel="Security Assessment Results (SAR)" />
)

export default OscalAssessmentResults