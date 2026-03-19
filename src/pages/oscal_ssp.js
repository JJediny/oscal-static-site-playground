import React, { useEffect, useState } from "react"

const JSONbuildtime = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    import("../../content/oscal_ssp_schema.json").then((mod) => {
      setData(mod.default || mod)
    })
  }, [])

  if (!data) return <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>Loading...</div>

  return (
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
      <h1>{data.ssp}</h1>
      <ul>
        {data.metadata.map((item, index) => (
          <li key={`metadata_title_${index}`}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default JSONbuildtime