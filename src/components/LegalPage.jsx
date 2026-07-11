function DetailList({ items }) {
  return (
    <dl className="detail-list">
      {items.map(([term, description]) => (
        <div className="detail-row" key={term}>
          <dt>{term}</dt>
          <dd>{description}</dd>
        </div>
      ))}
    </dl>
  )
}

export default function LegalPage({ page }) {
  return (
    <main className="page-shell">
      <section className="section legal-section">
        <p className="section-label">{page.label}</p>
        <h1 className="page-title">{page.title}</h1>
        <p className="statement">{page.statement}</p>
        {page.paragraphs?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {page.items ? <DetailList items={page.items} /> : null}
        {page.contact ? (
          <div className="page-contact">
            <p>{page.contact.label}</p>
            <a href={page.contact.href}>{page.contact.text}</a>
          </div>
        ) : null}
      </section>
    </main>
  )
}
