/**
 * OscalPage — shared layout component for OSCAL model pages.
 *
 * @typedef {Object} OscalMetadata
 * @property {string} title
 * @property {string} [version]
 * @property {string} ['oscal-version']
 * @property {string} [published]
 * @property {string} ['last-modified']
 * @property {string} [remarks]
 * @property {Array<{title?: string, version?: string, 'oscal-version'?: string, published?: string, 'last-modified'?: string, remarks?: string}>} [revisions]
 * @property {Array<{id: string, title: string}>} [roles]
 * @property {Array<{uuid: string, name?: string, type?: string}>} [parties]
 * @property {Array} [locations]
 * @property {Array} ['responsible-parties']
 * @property {Array} [props]
 *
 * @typedef {Object} OscalModel
 * @property {string} [uuid]
 * @property {OscalMetadata} metadata
 *
 * @typedef {Object} OscalPageProps
 * @property {string} [title]         – page heading (falls back to metadata.title)
 * @property {OscalModel} model       – root model object extracted from the JSON envelope
 * @property {string} [modelLabel]    – human-readable model type label
 */
import React, { useState } from 'react'
import Layout from './layout'
import SEO from './seo'

/* ── helpers ─────────────────────────────────────────────── */

/** Convert a label string to a URL-safe anchor id, e.g. "System Characteristics" → "system-characteristics" */
const toAnchorId = (label) =>
  String(label)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')

const fmt = (val) => {
  if (val === null || val === undefined) return '—'
  if (typeof val === 'boolean') return val ? 'Yes' : 'No'
  if (typeof val !== 'object') return String(val)
  return JSON.stringify(val)
}

const formatDate = (str) => {
  if (!str) return '—'
  try {
    return new Date(str).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch (_) {
    return str
  }
}

/* render a small table for an array of objects */
const ArraySection = ({ label, items }) => {
  const [expanded, setExpanded] = useState(false)
  if (!items || items.length === 0) return null
  // pick columns that appear on most items (first 3-4 values)
  const sample = items[0]
  const cols = Object.keys(sample || {}).slice(0, 4)
  const anchorId = toAnchorId(label)

  return (
    <div id={anchorId} className="margin-y-3">
      <button
        className="usa-button usa-button--unstyled font-body-sm text-bold"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
      >
        {expanded ? '▼' : '▶'} {label}{' '}
        <span className="usa-tag bg-base-lighter text-ink">{items.length}</span>
      </button>
      {expanded && (
        <div className="overflow-auto margin-top-1">
          <table className="usa-table usa-table--borderless usa-table--compact width-full font-body-xs">
            <thead>
              <tr>
                {cols.map((c) => (
                  <th key={c} scope="col" className="text-normal">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={item.uuid || item.id || i}>
                  {cols.map((c) => (
                    <td key={c}>{fmt(item[c])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

/* render a nested object as a definition list */
const ObjectSection = ({ label, obj }) => {
  const [expanded, setExpanded] = useState(false)
  if (!obj || typeof obj !== 'object') return null
  const entries = Object.entries(obj)
  if (entries.length === 0) return null
  const anchorId = toAnchorId(label)
  return (
    <div id={anchorId} className="margin-y-3">
      <button
        className="usa-button usa-button--unstyled font-body-sm text-bold"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
      >
        {expanded ? '▼' : '▶'} {label}
      </button>
      {expanded && (
        <dl className="usa-list--unstyled margin-top-1 font-body-xs border-left-05 border-accent-cool-light padding-left-2">
          {entries.map(([k, v]) => (
            <div key={k} className="margin-bottom-1">
              <dt className="text-bold">{k}</dt>
              <dd className="margin-left-2 text-base-dark">{fmt(v)}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  )
}

/**
 * RevisionTimeline — renders metadata.revisions as a vertical timeline.
 * Each revision entry shows its version, oscal-version, published/last-modified dates,
 * and optional remarks.
 *
 * @param {{ revisions: Array<Object> }} props
 */
const RevisionTimeline = ({ revisions }) => {
  const [expanded, setExpanded] = useState(false)
  if (!revisions || revisions.length === 0) return null
  return (
    <div id="revisions" className="margin-y-3">
      <button
        className="usa-button usa-button--unstyled font-body-sm text-bold"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
      >
        {expanded ? '▼' : '▶'} Revision History{' '}
        <span className="usa-tag bg-base-lighter text-ink">{revisions.length}</span>
      </button>
      {expanded && (
        <ol
          className="margin-top-2 padding-left-0"
          style={{ listStyle: 'none', borderLeft: '3px solid #005ea2', paddingLeft: '1.5rem' }}
        >
          {revisions.map((rev, i) => (
            <li
              key={rev.version || rev.published || i}
              className="margin-bottom-3 position-relative"
              style={{ marginLeft: '0' }}
            >
              {/* Timeline dot */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-1.85rem',
                  top: '0.25rem',
                  width: '0.75rem',
                  height: '0.75rem',
                  borderRadius: '50%',
                  background: '#005ea2',
                  display: 'inline-block',
                }}
              />
              <div className="usa-card__container border-base-lighter radius-md padding-2 font-body-xs">
                {rev.title && (
                  <p className="text-bold margin-0 margin-bottom-05">{rev.title}</p>
                )}
                <dl className="usa-list--unstyled margin-0">
                  {rev.version && (
                    <div className="display-flex margin-bottom-05">
                      <dt className="text-base-dark margin-right-1" style={{ minWidth: '9rem' }}>Version</dt>
                      <dd className="margin-0">{rev.version}</dd>
                    </div>
                  )}
                  {rev['oscal-version'] && (
                    <div className="display-flex margin-bottom-05">
                      <dt className="text-base-dark margin-right-1" style={{ minWidth: '9rem' }}>OSCAL Version</dt>
                      <dd className="margin-0">{rev['oscal-version']}</dd>
                    </div>
                  )}
                  {rev.published && (
                    <div className="display-flex margin-bottom-05">
                      <dt className="text-base-dark margin-right-1" style={{ minWidth: '9rem' }}>Published</dt>
                      <dd className="margin-0">{formatDate(rev.published)}</dd>
                    </div>
                  )}
                  {rev['last-modified'] && (
                    <div className="display-flex margin-bottom-05">
                      <dt className="text-base-dark margin-right-1" style={{ minWidth: '9rem' }}>Last Modified</dt>
                      <dd className="margin-0">{formatDate(rev['last-modified'])}</dd>
                    </div>
                  )}
                  {rev.remarks && (
                    <div className="display-flex">
                      <dt className="text-base-dark margin-right-1" style={{ minWidth: '9rem' }}>Remarks</dt>
                      <dd className="margin-0 text-base-dark">{rev.remarks}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

/* ── main component ──────────────────────────────────────── */

const OscalPage = ({ title, model, modelLabel }) => {
  if (!model) {
    return (
      <Layout>
        <div className="grid-container usa-section">
          <p className="text-base">Loading…</p>
        </div>
      </Layout>
    )
  }

  const meta = model.metadata || {}
  const pageTitle = title || meta.title || modelLabel || 'OSCAL Document'

  // Sections = every top-level key except uuid and metadata
  const sectionKeys = Object.keys(model).filter(
    (k) => k !== 'uuid' && k !== 'metadata'
  )

  return (
    <Layout>
      <SEO title={pageTitle} />
      <div className="grid-container usa-section">
        {/* ── header ── */}
        <div className="margin-bottom-4">
          {modelLabel && (
            <span className="usa-tag bg-primary-lighter text-primary-darker margin-bottom-1 display-block">
              {modelLabel}
            </span>
          )}
          <h1 className="margin-top-0">{pageTitle}</h1>
          <code className="font-mono-xs text-base">UUID: {model.uuid || '—'}</code>
        </div>

        {/* ── metadata card ── */}
        <div className="usa-summary-box margin-bottom-4" role="region" aria-label="Document metadata">
          <div className="usa-summary-box__body">
            <h2 className="usa-summary-box__heading font-heading-sm">Metadata</h2>
            <div className="usa-summary-box__text">
              <table className="usa-table usa-table--borderless usa-table--compact width-full font-body-sm">
                <tbody>
                  {[
                    ['Version', meta.version],
                    ['OSCAL Version', meta['oscal-version']],
                    ['Published', formatDate(meta.published)],
                    ['Last Modified', formatDate(meta['last-modified'])],
                    ['Remarks', meta.remarks],
                  ]
                    .filter(([, v]) => v)
                    .map(([label, val]) => (
                      <tr key={label}>
                        <th scope="row" className="text-normal text-base-dark" style={{ width: '160px' }}>
                          {label}
                        </th>
                        <td>{String(val)}</td>
                      </tr>
                    ))}
                </tbody>
              </table>

              {/* Metadata sub-collections */}
              {meta.props && meta.props.length > 0 && (
                <ArraySection label="Props" items={meta.props} />
              )}
              {meta.roles && meta.roles.length > 0 && (
                <ArraySection label="Roles" items={meta.roles} />
              )}
              {meta.parties && meta.parties.length > 0 && (
                <ArraySection label="Parties" items={meta.parties} />
              )}
              {meta.locations && meta.locations.length > 0 && (
                <ArraySection label="Locations" items={meta.locations} />
              )}
              {meta['responsible-parties'] && (
                <ArraySection label="Responsible Parties" items={meta['responsible-parties']} />
              )}
              {meta.revisions && meta.revisions.length > 0 && (
                <RevisionTimeline revisions={meta.revisions} />
              )}
            </div>
          </div>
        </div>

        {/* ── model-specific sections ── */}
        <h2 className="font-heading-md">Model Sections</h2>
        <div className="border-top border-base-lighter">
          {sectionKeys.map((key) => {
            const val = model[key]
            if (Array.isArray(val)) {
              return <ArraySection key={key} label={key} items={val} />
            }
            if (val && typeof val === 'object') {
              return <ObjectSection key={key} label={key} obj={val} />
            }
            return (
              <div key={key} className="margin-y-2 font-body-sm">
                <span className="text-bold">{key}:</span>{' '}
                <span className="text-base-dark">{fmt(val)}</span>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default OscalPage
