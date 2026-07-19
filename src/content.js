export const LANGUAGES = {
  en: 'EN',
  ja: 'JP',
}

export const content = {
  en: {
    htmlLang: 'en',
    title: '株式会社Core7 | Core7, Inc. - AI THAT ADAPTS TO PEOPLE',
    description:
      '株式会社Core7 (Core7, Inc.) builds AI that adapts to people and develops KeigoButton, an AI keyboard for natural polite Japanese.',
    navLabel: 'Main',
    backLabel: '<- BACK TO INDEX',
    nav: {
      philosophy: 'PHILOSOPHY',
      signal: 'SIGNAL',
      product: 'PRODUCT',
      contact: 'CONTACT',
    },
    hero: {
      hiddenTitle: '株式会社Core7 | Core7, Inc. - AI that adapts to people',
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
          'Developed and operated by Core7, KeigoButton rewrites casual Japanese into natural polite language directly from the iPhone keyboard. It works without interrupting the flow of a conversation and gives us a practical foundation for understanding how people choose tone, formality, and writing style in real Japanese communication.',
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
            { label: 'COMPANY PROFILE', href: '/company' },
            { label: 'PHILOSOPHY', href: '/#philosophy' },
            { label: 'SIGNAL', href: '/#signal' },
            { label: 'CAREERS', href: '/careers' },
          ],
        },
        {
          title: 'PRODUCT',
          links: [
            { label: 'KEIGOBUTTON', href: '/#product' },
            { label: 'APP STORE', href: 'APP_STORE', external: true },
          ],
        },
        {
          title: 'LEGAL',
          links: [
            { label: 'PRIVACY POLICY', href: '/privacy' },
            { label: 'TERMS OF SERVICE', href: '/terms' },
            { label: 'LEGAL NOTICE', href: '/legal-notice' },
          ],
        },
      ],
      fine: '© 2026 CORE7 - RENDERED ENTIRELY IN TEXT',
    },
    footerPages: [
      {
        id: 'company',
        path: '/company',
        label: 'COMPANY / PROFILE',
        title: 'Company Profile',
        statement: 'Core7 is the product and AI software practice operated by Core7, inc.',
        paragraphs: [
          'We build software that reduces the distance between human intent and machine output. Our first product, KeigoButton, focuses on one everyday surface where that distance is easy to feel: Japanese communication.',
        ],
        items: [
          ['Company name', 'Core7, Inc. / 株式会社Core7'],
          ['Japanese reading', 'コアセブン'],
          ['Representative', 'Itsuki Son'],
          ['Address', '3-9-24 Sakura, Setagaya-ku, Tokyo, Japan'],
          ['Corporate number', '3010901059255'],
          ['Established', 'April 2, 2026'],
          ['Business', 'AI product development, software services, and related digital operations'],
          ['Contact', 'keigobutton@gmail.com'],
        ],
      },
      {
        id: 'careers',
        path: '/careers',
        label: 'COMPANY / CAREERS',
        title: 'Careers',
        statement: 'We are interested in people who care about the small choices that make software feel human.',
        paragraphs: [
          'Core7 is still early. We are not publishing fixed roles here yet, but we are open to hearing from people who think carefully about AI, language, product taste, and tools that sit close to daily life.',
          'If that describes your work, send a short note, links to relevant projects, and the kind of problems you want to spend time on.',
        ],
        contact: {
          label: 'CONTACT FOR CAREERS',
          href: 'mailto:keigobutton@gmail.com?subject=Careers',
          text: 'KEIGOBUTTON@GMAIL.COM',
        },
      },
      {
        id: 'privacy',
        path: '/privacy',
        label: 'LEGAL / PRIVACY POLICY',
        title: 'Privacy Policy',
        statement: 'Core7 handles information only where it is needed to operate, improve, and protect its products.',
        paragraphs: [
          'We may receive information that users provide through inquiries, support requests, and product interactions. We use that information to respond to users, provide services, maintain security, understand product quality, and improve the experience.',
          'We do not sell personal information. When external service providers are used for infrastructure, analytics, support, or operations, information is shared only to the extent necessary for those services.',
          'Users may contact us about disclosure, correction, deletion, or suspension of use of their personal information. Requests should be sent to keigobutton@gmail.com.',
          'This policy may be updated as Core7 products and operations change. Material updates will be reflected on this page.',
        ],
      },
      {
        id: 'terms',
        path: '/terms',
        label: 'LEGAL / TERMS OF SERVICE',
        title: 'Terms of Service',
        statement: 'Core7 products are tools for writing, communication, and everyday software use. They should be used with judgment.',
        paragraphs: [
          'Services may be changed, suspended, or discontinued when necessary for quality, security, maintenance, or operational reasons.',
          'Users are responsible for the text they input, review, send, and publish through Core7 products. AI-assisted output should be checked before use, especially where tone, accuracy, or context matters.',
          'Users must not use the services for unlawful activity, abuse, unauthorized access, interference with service operation, or infringement of third-party rights.',
          'To the extent permitted by law, Core7 is not liable for indirect, incidental, special, or consequential damages arising from use of the services.',
          'Questions about these terms can be sent to keigobutton@gmail.com.',
        ],
      },
      {
        id: 'legal-notice',
        path: '/legal-notice',
        label: 'LEGAL / NOTICE',
        title: 'Legal Notice',
        statement: 'KeigoButton is distributed through the App Store. Purchase and subscription flows are handled there when applicable.',
        paragraphs: [
          'Prices, subscriptions, cancellations, and refunds for App Store distribution are handled through Apple’s purchase and account systems. Any direct sale by Core7 through this website would require additional commercial transaction disclosures on this page.',
        ],
        items: [
          ['Operator', 'Core7, inc.'],
          ['Representative', 'Itsuki Son'],
          ['Address', '3-9-24 Sakura, Setagaya-ku, Tokyo, Japan'],
          ['Contact', 'keigobutton@gmail.com'],
        ],
      },
    ],
  },
  ja: {
    htmlLang: 'ja',
    title: '株式会社Core7｜人に合わせて動くAI',
    description:
      '株式会社Core7（コアセブン）は、人に合わせて動くAIをつくる東京都世田谷区の会社です。AIキーボード「敬語ボタン」を開発・運営しています。',
    navLabel: 'メイン',
    backLabel: '<- トップへ戻る',
    nav: {
      philosophy: '思想',
      signal: 'シグナル',
      product: 'プロダクト',
      contact: '連絡先',
    },
    hero: {
      hiddenTitle: '株式会社Core7（コアセブン）- 人に合わせて動くAI',
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
          '株式会社Core7が開発・運営する敬語ボタンは、キーボードから直接、くだけた日本語を自然な敬語に整えるAIキーボードです。アプリを移動せず、会話の流れを止めずに使える。同時に、実際の日本語コミュニケーションで人がどんな丁寧さ、距離感、文体を選ぶのかを理解するための土台にもなっています。',
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
            { label: '会社概要', href: '/company' },
            { label: '思想', href: '/#philosophy' },
            { label: 'シグナル', href: '/#signal' },
            { label: '採用', href: '/careers' },
          ],
        },
        {
          title: 'プロダクト',
          links: [
            { label: '敬語ボタン', href: '/#product' },
            { label: 'App Store', href: 'APP_STORE', external: true },
          ],
        },
        {
          title: '法務',
          links: [
            { label: 'プライバシーポリシー', href: '/privacy' },
            { label: '利用規約', href: '/terms' },
            { label: '法定表示', href: '/legal-notice' },
          ],
        },
      ],
      fine: '© 2026 株式会社Core7 - すべてテキストで描画',
    },
    footerPages: [
      {
        id: 'company',
        path: '/company',
        label: '会社 / 会社概要',
        title: '会社概要',
        statement: '株式会社Core7は、人の意図とAIの出力のあいだにある距離を短くするためのプロダクトをつくっています。',
        paragraphs: [
          '最初のプロダクトである敬語ボタンは、日本語のコミュニケーションという日常的な接点から始まりました。ことばの温度、距離感、丁寧さを、実際に使われるソフトウェアの中で扱うことを重視しています。',
        ],
        items: [
          ['会社名', '株式会社Core7'],
          ['会社名カナ', 'コアセブン'],
          ['英語表記', 'Core7, Inc.'],
          ['代表者', '孫逸歓'],
          ['所在地', '東京都世田谷区桜3-9-24'],
          ['法人番号', '3010901059255'],
          ['設立', '2026年4月2日'],
          ['事業内容', 'AIプロダクトの企画・開発・運営、ソフトウェアサービス、関連するデジタル事業'],
          ['連絡先', 'keigobutton@gmail.com'],
        ],
      },
      {
        id: 'careers',
        path: '/careers',
        label: '会社 / 採用',
        title: '採用',
        statement: 'Core7は、ソフトウェアが人に合う瞬間を丁寧に考えられる人と働きたいと考えています。',
        paragraphs: [
          '現在、固定の募集職種は掲載していません。ただし、AI、ことば、プロダクトの手触り、日々の生活に近いツールづくりに関心のある方からの連絡は歓迎しています。',
          'これまでの制作物や関心のある課題がわかる短いメッセージを添えてご連絡ください。',
        ],
        contact: {
          label: '採用に関する連絡先',
          href: 'mailto:keigobutton@gmail.com?subject=Careers',
          text: 'KEIGOBUTTON@GMAIL.COM',
        },
      },
      {
        id: 'privacy',
        path: '/privacy',
        label: '法務 / プライバシーポリシー',
        title: 'プライバシーポリシー',
        statement: '株式会社Core7は、サービスの提供、改善、保護に必要な範囲で情報を取り扱います。',
        paragraphs: [
          'お問い合わせ、サポート、プロダクト利用に伴って利用者から提供された情報を取得する場合があります。取得した情報は、問い合わせ対応、サービス提供、品質改善、安全な運用、必要な連絡のために利用します。',
          '取得した個人情報を販売することはありません。インフラ、解析、サポート、運用などに外部サービスを利用する場合は、必要な範囲に限って情報を取り扱います。',
          '個人情報の開示、訂正、削除、利用停止などに関するお問い合わせは、keigobutton@gmail.com までご連絡ください。',
          '本ポリシーは、サービス内容や運用の変更に応じて更新される場合があります。重要な変更はこのページに反映します。',
        ],
      },
      {
        id: 'terms',
        path: '/terms',
        label: '法務 / 利用規約',
        title: '利用規約',
        statement: 'Core7のプロダクトは、文章作成、コミュニケーション、日常的なソフトウェア利用を支援するためのものです。',
        paragraphs: [
          '株式会社Core7は、品質、セキュリティ、保守、運用上の理由により、サービスの内容を変更、停止、または終了する場合があります。',
          '利用者は、プロダクトに入力する文章、確認する文章、送信・公開する文章について責任を負います。AIが生成または支援した出力は、文脈、正確性、相手との関係性を踏まえて利用前に確認してください。',
          '利用者は、法令違反、不正アクセス、サービス運営の妨害、第三者の権利侵害、その他不適切な目的でサービスを利用してはなりません。',
          '法令で認められる範囲において、株式会社Core7はサービスの利用に関連して生じた間接的、付随的、特別、結果的な損害について責任を負いません。',
          '本規約に関するお問い合わせは、keigobutton@gmail.com までご連絡ください。',
        ],
      },
      {
        id: 'legal-notice',
        path: '/legal-notice',
        label: '法務 / 法定表示',
        title: '法定表示',
        statement: '敬語ボタンはApp Storeを通じて配信されています。購入やサブスクリプションに関する手続きは、該当する場合App Store上で行われます。',
        paragraphs: [
          'App Storeで配信されるプロダクトの価格、サブスクリプション、解約、返金は、Appleの購入およびアカウント管理の仕組みに従って取り扱われます。今後、株式会社Core7がこのウェブサイト上でサービスを直接販売する場合は、必要な表示項目をこのページに追加します。',
        ],
        items: [
          ['販売事業者', '株式会社Core7'],
          ['代表者', '孫逸歓'],
          ['所在地', '東京都世田谷区桜3-9-24'],
          ['連絡先', 'keigobutton@gmail.com'],
        ],
      },
    ],
  },
}
