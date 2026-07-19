import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const baseHtml = readFileSync(resolve(dist, 'index.html'), 'utf8')

const pages = [
  {
    path: 'company',
    title: '株式会社Core7｜会社概要',
    description:
      '株式会社Core7（コアセブン）の会社概要。代表者、所在地、法人番号、事業内容、提供プロダクトをご案内します。',
    label: '会社 / 会社概要',
    heading: '会社概要',
    body: `
      <p class="statement">株式会社Core7は、人の意図とAIの出力のあいだにある距離を短くするためのプロダクトをつくっています。</p>
      <dl class="detail-list">
        <div class="detail-row"><dt>会社名</dt><dd>株式会社Core7（コアセブン）</dd></div>
        <div class="detail-row"><dt>英語表記</dt><dd>Core7, Inc.</dd></div>
        <div class="detail-row"><dt>代表者</dt><dd>孫 逸歓</dd></div>
        <div class="detail-row"><dt>所在地</dt><dd>〒156-0053 東京都世田谷区桜3-9-24</dd></div>
        <div class="detail-row"><dt>法人番号</dt><dd>3010901059255</dd></div>
        <div class="detail-row"><dt>設立</dt><dd>2026年4月2日</dd></div>
        <div class="detail-row"><dt>事業内容</dt><dd>AIプロダクトの企画・開発・運営、ソフトウェアサービス、関連するデジタル事業</dd></div>
        <div class="detail-row"><dt>プロダクト</dt><dd><a href="https://keigobutton.vercel.app/">敬語ボタン｜AIキーボード</a></dd></div>
      </dl>`,
  },
  {
    path: 'careers',
    title: '採用｜株式会社Core7',
    description:
      '株式会社Core7の採用情報。AI、ことば、日々の生活に近いプロダクトづくりに関心のある方からのご連絡を歓迎します。',
    label: '会社 / 採用',
    heading: '採用',
    body: '<p class="statement">ソフトウェアが人に合う瞬間を、丁寧に考えられる人と働きたいと考えています。</p><p>AI、ことば、プロダクトの手触り、日々の生活に近いツールづくりに関心のある方からの連絡を歓迎しています。</p>',
  },
  {
    path: 'privacy',
    title: 'プライバシーポリシー｜株式会社Core7',
    description: '株式会社Core7のウェブサイトおよび会社運営に関するプライバシーポリシーです。',
    label: '法務 / プライバシーポリシー',
    heading: 'プライバシーポリシー',
    body: '<p class="statement">株式会社Core7は、サービスの提供、改善、保護に必要な範囲で情報を取り扱います。</p><p>取得した個人情報を販売することはありません。お問い合わせは keigobutton@gmail.com までご連絡ください。</p>',
  },
  {
    path: 'terms',
    title: '利用規約｜株式会社Core7',
    description: '株式会社Core7が提供するウェブサイトおよびプロダクトに関する利用条件です。',
    label: '法務 / 利用規約',
    heading: '利用規約',
    body: '<p class="statement">Core7のプロダクトは、文章作成、コミュニケーション、日常的なソフトウェア利用を支援するためのものです。</p>',
  },
  {
    path: 'legal-notice',
    title: '法定表示｜株式会社Core7',
    description: '株式会社Core7および敬語ボタンに関する事業者情報と法定表示です。',
    label: '法務 / 法定表示',
    heading: '法定表示',
    body: '<p class="statement">敬語ボタンはApp Storeを通じて配信されています。</p><p>販売事業者：株式会社Core7 / 代表者：孫 逸歓 / 所在地：東京都世田谷区桜3-9-24</p>',
  },
]

function replaceMeta(html, page) {
  const canonical = `https://www.core7-jp.com/${page.path}`
  const fallback = `<!-- SEO_CONTENT_START -->
    <div id="seo-content" class="section legal-section">
      <p class="section-label">${page.label}</p>
      <h1 class="page-title">${page.heading}</h1>
      ${page.body}
      <p><a href="/">&lt;- トップへ戻る</a></p>
    </div>
    <!-- SEO_CONTENT_END -->`

  return html
    .replace(/<title>.*?<\/title>/s, `<title>${page.title}</title>`)
    .replace(
      /<meta\s+name="description"[^>]*>/s,
      `<meta name="description" content="${page.description}" />`
    )
    .replace(
      /<link\s+rel="canonical"[^>]*>/s,
      `<link rel="canonical" href="${canonical}" />`
    )
    .replace(
      /<meta\s+property="og:title"[^>]*>/s,
      `<meta property="og:title" content="${page.title}" />`
    )
    .replace(
      /<meta\s+property="og:description"[^>]*>/s,
      `<meta property="og:description" content="${page.description}" />`
    )
    .replace(
      /<meta\s+property="og:url"[^>]*>/s,
      `<meta property="og:url" content="${canonical}" />`
    )
    .replace(/<!-- SEO_CONTENT_START -->.*?<!-- SEO_CONTENT_END -->/s, fallback)
}

for (const page of pages) {
  const outputDirectory = resolve(dist, page.path)
  mkdirSync(outputDirectory, { recursive: true })
  writeFileSync(resolve(outputDirectory, 'index.html'), replaceMeta(baseHtml, page))
}

console.log(`Generated ${pages.length} route-specific SEO pages`)
