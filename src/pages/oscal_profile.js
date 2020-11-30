import React from "react"
import JSONData from "../../content/oscal_profile_schema.json"

const JSONbuildtime = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>{JSONData.profile}</h1>
    <ul>
      {JSONData.metadata.map((data, index) => {
        return <li key={`metadata_title_${index}`}>{data.title}</li>
      })}
    </ul>
  </div>
)
export default JSONbuildtime