export const LANGUAGES = {
  en: 'EN',
  ja: 'JP',
}

export const content = {
  en: {
    htmlLang: 'en',
    title: 'CORE7 - AI THAT ADAPTS TO PEOPLE',
    description:
      'Core7 builds AI that adapts to people - embedded into daily life, useful in real moments, designed around genuine human needs.',
    navLabel: 'Main',
    nav: {
      philosophy: 'PHILOSOPHY',
      signal: 'SIGNAL',
      product: 'PRODUCT',
      contact: 'CONTACT',
    },
    hero: {
      hiddenTitle: 'Core7 - AI that adapts to people',
      tagline: 'AI THAT ADAPTS TO PEOPLE',
    },
    sections: {
      philosophy: {
        label: '01 / PHILOSOPHY',
        paragraphs: [
          'Throughout history, technology has made life more efficient, but often at the cost of adding new layers of complexity. We build tools to save time, then create new systems, workflows, and habits just to manage those tools.',
          'At Core7, we believe AI should move in the opposite direction.',
          'Instead of forcing people to adapt to technology, we build AI that adapts to people - embedded into daily life, useful in real moments, and designed around genuine human needs.',
        ],
      },
      signal: {
        label: '02 / SIGNAL',
        intro:
          'Most AI systems are trained to be generally useful, but real communication is deeply contextual. A good answer is not always the longest, safest, or most formal one. Sometimes it should be -',
        listLabel: 'What a good answer sometimes needs to be',
        qualities: ['SHORTER.', 'WARMER.', 'MORE RESPECTFUL.', 'MORE NATURAL.'],
        closing:
          'Core7 focuses on capturing these subtle human preferences through real product interactions - turning everyday choices into structured signals for better AI.',
      },
      product: {
        label: '03 / PRODUCT - KEIGOBUTTON',
        statement: 'KeigoButton is our first product built around this belief.',
        body:
          'It helps users rewrite casual Japanese into natural polite language directly from the keyboard. At the same time, it gives us a practical foundation for understanding how people choose between different tones, levels of formality, and writing styles in real Japanese communication.',
        imageAlt:
          'KeigoButton App Store screenshots - rewrite casual Japanese into polite language with one tap, from any app, without leaving the keyboard',
        statsLabel: 'KeigoButton stats',
        stats: [
          ['5,000+', 'DOWNLOADS'],
          ['20,000+', 'REWRITES'],
          ['0.5s', 'PER REWRITE'],
        ],
        storeLink: 'DOWNLOAD ON THE APP STORE ->',
      },
    },
    footer: {
      label: '04 / CONTACT',
      columns: [
        {
          title: 'COMPANY',
          links: [
            { label: 'COMPANY PROFILE', href: '#/company' },
            { label: 'PHILOSOPHY', href: '#philosophy' },
            { label: 'SIGNAL', href: '#signal' },
            { label: 'CAREERS', href: 'mailto:keigobutton@gmail.com?subject=Careers' },
          ],
        },
        {
          title: 'PRODUCT',
          links: [
            { label: 'KEIGOBUTTON', href: '#product' },
            { label: 'APP STORE', href: 'APP_STORE', external: true },
          ],
        },
        {
          title: 'LEGAL',
          links: [
            { label: 'PRIVACY POLICY', href: '#/privacy' },
            { label: 'TERMS OF SERVICE', href: '#/terms' },
            { label: 'LEGAL NOTICE', href: '#/legal-notice' },
          ],
        },
      ],
      fine: '© 2026 CORE7 - RENDERED ENTIRELY IN TEXT',
    },
    legalPages: [
      {
        id: 'company',
        label: 'COMPANY / PROFILE',
        title: 'Company Profile',
        statement: 'Core7 is operated by Kabushiki Kaisha Core7.',
        items: [
          ['Company name', 'Kabushiki Kaisha Core7'],
          ['Representative', 'Itsuki Son'],
          ['Address', '3-9-24 Sakura, Setagaya-ku, Tokyo, Japan'],
          ['Business', 'Software services, AI product development, and related digital services'],
          ['Contact', 'keigobutton@gmail.com'],
        ],
      },
      {
        id: 'privacy',
        label: 'LEGAL / PRIVACY POLICY',
        title: 'Privacy Policy',
        statement: 'We handle personal information only for clear product and contact purposes.',
        paragraphs: [
          'Core7 may collect information provided through inquiries, product support, and product usage where necessary to operate, improve, and protect our services.',
          'We do not sell personal information. When we use external service providers, we limit disclosure to what is necessary for service operation, analytics, infrastructure, support, or legal compliance.',
          'Requests related to disclosure, correction, deletion, or suspension of use can be sent to keigobutton@gmail.com.',
        ],
      },
      {
        id: 'terms',
        label: 'LEGAL / TERMS OF SERVICE',
        title: 'Terms of Service',
        statement: 'Use Core7 products responsibly, in the context they are designed for.',
        paragraphs: [
          'Core7 provides software and AI-assisted tools as-is and may update, suspend, or change features when needed for product quality, security, or operations.',
          'Users are responsible for the text they input, review, send, and publish through our products. AI-generated or AI-assisted output should be checked before use.',
          'To the extent permitted by law, Core7 is not liable for indirect, incidental, or consequential damages arising from use of the service.',
        ],
      },
      {
        id: 'legal-notice',
        label: 'LEGAL / NOTICE',
        title: 'Legal Notice',
        statement: 'Commercial disclosures depend on how each product is sold.',
        paragraphs: [
          'KeigoButton is distributed through the App Store. Pricing, subscriptions, cancellation, and refunds are handled through the App Store purchase flow when applicable.',
          'If Core7 sells services directly on this website in the future, this section should be expanded with the required commercial transaction details.',
        ],
      },
    ],
  },
  ja: {
    htmlLang: 'ja',
    title: 'CORE7 - 人に合わせて動くAI',
    description:
      'Core7は、人が技術に合わせるのではなく、日々の生活と本当のニーズに寄り添って動くAIをつくります。',
    navLabel: 'メイン',
    nav: {
      philosophy: '思想',
      signal: 'シグナル',
      product: 'プロダクト',
      contact: '連絡先',
    },
    hero: {
      hiddenTitle: 'Core7 - 人に合わせて動くAI',
      tagline: '人に合わせて動くAI',
    },
    sections: {
      philosophy: {
        label: '01 / 思想',
        paragraphs: [
          'テクノロジーは、生活を何度も便利にしてきました。その一方で、道具を使いこなすための設定、手順、習慣も増え続けています。時間を取り戻すための道具が、また別の管理を生む。',
          'Core7がつくりたいAIは、その流れを逆に進むものです。',
          '人が技術に合わせるのではなく、AIのほうが人に合わせる。日々の生活に自然に入り、必要な場面で確かに役に立つ。本当の困りごとや小さな感覚からAIを設計することを大切にしています。',
        ],
      },
      signal: {
        label: '02 / シグナル',
        intro:
          '多くのAIは、広く役に立つようにつくられています。でも、ことばはいつも状況の中にあります。いい返事は、長ければいいわけでも、無難で丁寧なら十分というわけでもありません。ときには -',
        listLabel: 'いい返事に必要になること',
        qualities: ['短く。', 'やわらかく。', '敬意が伝わるように。', '自然に。'],
        closing:
          'Core7は、プロダクトの中で生まれるこうした小さな選択を大切にします。人がどの表現を選ぶのかという日常の判断を、より人に合うAIをつくるための信号に変えていきます。',
      },
      product: {
        label: '03 / プロダクト - 敬語ボタン',
        statement: '敬語ボタンは、この考え方から生まれた最初のプロダクトです。',
        body:
          'キーボードから直接、くだけた日本語を自然な敬語に整える。アプリを移動せず、会話の流れを止めずに使える。同時に、実際の日本語コミュニケーションで人がどんな丁寧さ、距離感、文体を選ぶのかを理解するための土台にもなっています。',
        imageAlt:
          '敬語ボタンのApp Storeスクリーンショット。どのアプリからでも、キーボード上でくだけた日本語を自然な敬語に整えられる。',
        statsLabel: '敬語ボタンの実績',
        stats: [
          ['5,000+', 'ダウンロード'],
          ['20,000+', '変換'],
          ['0.5秒', '1回の変換'],
        ],
        storeLink: 'APP STOREでダウンロード ->',
      },
    },
    footer: {
      label: '04 / 連絡先',
      columns: [
        {
          title: '会社',
          links: [
            { label: '会社概要', href: '#/company' },
            { label: '思想', href: '#philosophy' },
            { label: 'シグナル', href: '#signal' },
            { label: '採用', href: 'mailto:keigobutton@gmail.com?subject=Careers' },
          ],
        },
        {
          title: 'プロダクト',
          links: [
            { label: '敬語ボタン', href: '#product' },
            { label: 'App Store', href: 'APP_STORE', external: true },
          ],
        },
        {
          title: '法務',
          links: [
            { label: 'プライバシーポリシー', href: '#/privacy' },
            { label: '利用規約', href: '#/terms' },
            { label: '法定表示', href: '#/legal-notice' },
          ],
        },
      ],
      fine: '© 2026 株式会社Core7 - すべてテキストで描画',
    },
    legalPages: [
      {
        id: 'company',
        label: '会社 / 会社概要',
        title: '会社概要',
        statement: '株式会社Core7は、AIプロダクトとソフトウェアサービスをつくる会社です。',
        items: [
          ['会社名', '株式会社Core7'],
          ['代表者', '孫逸歓'],
          ['所在地', '東京都世田谷区桜3-9-24'],
          ['事業内容', 'ソフトウェアサービス、AIプロダクトの企画・開発・運営、関連するデジタルサービス'],
          ['連絡先', 'keigobutton@gmail.com'],
        ],
      },
      {
        id: 'privacy',
        label: '法務 / プライバシーポリシー',
        title: 'プライバシーポリシー',
        statement: '株式会社Core7は、目的を明確にしたうえで個人情報を取り扱います。',
        paragraphs: [
          'お問い合わせ、サポート、サービスの提供・改善・保護に必要な範囲で、利用者から提供された情報やプロダクト利用に関する情報を取得する場合があります。',
          '取得した情報を第三者に販売することはありません。外部サービスを利用する場合も、運用、解析、インフラ、サポート、法令対応に必要な範囲に限定します。',
          '個人情報の開示、訂正、削除、利用停止などに関するお問い合わせは、keigobutton@gmail.com までご連絡ください。',
        ],
      },
      {
        id: 'terms',
        label: '法務 / 利用規約',
        title: '利用規約',
        statement: 'Core7のプロダクトは、意図された文脈の中で責任を持って利用してください。',
        paragraphs: [
          '株式会社Core7は、ソフトウェアおよびAI支援ツールを現状有姿で提供し、品質、セキュリティ、運用上の理由により機能を更新、停止、変更する場合があります。',
          '利用者は、プロダクトに入力する文章、確認する文章、送信・公開する文章について責任を負います。AIが生成または支援した出力は、利用前に内容を確認してください。',
          '法令で認められる範囲において、株式会社Core7はサービスの利用に関連して生じた間接的、付随的、結果的な損害について責任を負いません。',
        ],
      },
      {
        id: 'legal-notice',
        label: '法務 / 法定表示',
        title: '法定表示',
        statement: '販売に関する表示は、プロダクトの提供方法に応じて整備します。',
        paragraphs: [
          '敬語ボタンはApp Storeを通じて配信されています。価格、サブスクリプション、解約、返金が発生する場合は、App Storeの購入フローに従って取り扱われます。',
          '今後、このウェブサイト上で株式会社Core7がサービスを直接販売する場合は、特定商取引法に基づく表示など、必要な項目をこのセクションに追加します。',
        ],
      },
    ],
  },
}
