const WORDMARK = String.raw`
 ######   #######  ########  ######## ########
##    ## ##     ## ##     ## ##       ##    ##
##       ##     ## ##     ## ##           ##
##       ##     ## ########  ######      ##
##       ##     ## ##   ##   ##         ##
##    ## ##     ## ##    ##  ##         ##
 ######   #######  ##     ## ########   ##
`

const APP_STORE_URL =
  'https://apps.apple.com/jp/app/%E6%95%AC%E8%AA%9E%E3%83%9C%E3%82%BF%E3%83%B3-ai%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89/id6777901723'

export default function Footer({ copy }) {
  return (
    <footer id="contact" className="footer">
      <p className="section-label">{copy.label}</p>
      <a className="footer-mail" href="mailto:keigobutton@gmail.com">
        KEIGOBUTTON@GMAIL.COM
      </a>

      <div className="footer-columns">
        {copy.columns.map((col) => (
          <div className="footer-col" key={col.title}>
            <p className="footer-col-title">{col.title}</p>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href === 'APP_STORE' ? APP_STORE_URL : link.href}
                    {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <pre className="footer-wordmark" aria-hidden="true">
        {WORDMARK}
      </pre>
      <p className="footer-fine">{copy.fine}</p>
    </footer>
  )
}
