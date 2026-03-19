import React, { useEffect, useState } from "react"

const JSONbuildtime = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    let mounted = true
    import("../../content/oscal_poam_schema.json")
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
      <h1>{data.poam.metadata.title}</h1>
      <ul>
        {data.poam["poam-items"].map((item, index) => (
          <li key={`poam_${index}`}>{item.item}</li>
        ))}
      </ul>
    </div>
  )
}

export default JSONbuildtime