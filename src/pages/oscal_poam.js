import React from "react"
import JSONData from "../../content/oscal_poam_schema.json"

const JSONbuildtime = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>{JSONData.poam.metadata.title}</h1>
    <ul>
      {JSONData.poam.poam-items.map((data, index) => {
        return <li key={`poam_${index}`}>{data.item}</li>
      })}
    </ul>
  </div>
)
export default JSONbuildtime