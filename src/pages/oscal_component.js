import React, { useEffect, useState } from "react"

const JSONbuildtime = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    let mounted = true
    import("../../content/oscal_component_schema.json")
      .then(mod => {
        if (mounted) setData(mod.default || mod)
      })
      .catch(() => {})
    return () => {
      mounted = false
    }
  }, [])

  if (!data) return null

  return (
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
      <h1>{data.component}</h1>
      <ul>
        {data.metadata.map((item, index) => (
          <li key={`metadata_title_${index}`}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default JSONbuildtime