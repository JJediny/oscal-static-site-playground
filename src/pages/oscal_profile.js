import React from 'react'
import raw from '../../content/oscal_profile_schema.json'
import OscalPage from '../components/oscal-page'

const OscalProfile = () => (
  <OscalPage model={raw['profile']} modelLabel="Profile" />
)

export default OscalProfile