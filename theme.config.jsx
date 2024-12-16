import { useConfig } from "nextra-theme-docs";
import { useRouter } from 'next/router';

export default {
  logo: <span>MVPAI 全栈开发入门技术手册</span>,
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://book.mvpai.dev' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      (
        <>
          <meta property="og:url" content={ url }/>
          <meta property="og:title" content={ frontMatter.title + " – MVPAI Book" || 'MVPAI Book' }/>
          <meta
            property="og:description"
            content={ frontMatter.description || 'MVPAI 全栈开发入门技术手册' }
          />
          <meta property="og:image"
                content="https://github.com/hardhackerlabs/book/blob/main/public/attachments/other/ARR.png?raw=true"/>
          <script dangerouslySetInnerHTML={ {
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${ process.env.GTM_TRACKING_ID }');
      `
          } }/>
        </>
      )
    )
  },
  project: {
    link: 'https://github.com/luobogor/mvpai-book'
  },
  i18n: [
    { locale: 'en', name: 'English' },
    { locale: 'zh', name: '中文' },
  ],
  useNextSeoProps() {
    const { frontMatter } = useConfig();

    return {
      titleTemplate: frontMatter.title + " – MVPAI Book",
    };
  },
  footer: {
    text: (
      <span>
        Create by ©{ " " }
        <a href="https://x.com/luobogooooo" target="_blank">
          Luobogor
        </a>
      </span>
    ),
  },
  faviconGlyph: "🤖",
}