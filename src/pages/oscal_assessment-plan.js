import React from 'react'
import raw from '../../content/oscal_assessment-plan_schema.json'
import OscalPage from '../components/oscal-page'

const OscalAssessmentPlan = () => (
  <OscalPage model={raw['assessment-plan']} modelLabel="Security Assessment Plan (SAP)" />
)

export default OscalAssessmentPlan