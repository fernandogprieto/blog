import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes } from 'prism-react-renderer'
import social from './data/social'


const config: Config = {
  title: 'Cloud Journey',
  url: 'https://fernandogprieto.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  projectName: 'fgp-web',
  customFields: {
    bio: 'Cloud Engineer, IT Specialist',
    description:
      'A personal blog to share knowledge about cloud infrastructure and IT operations using Docusaurus。',
  },
  themeConfig: {
    // announcementBar: {
    //   id: 'announcementBar-3',
    //   content: ``,
    // },
    image: 'img/og.png',
    metadata: [
      {
        name: 'author',
        content: 'Fernando Prieto',
      },
      {
        name: 'keywords',
        content: 'blog, portfolio, linux, docker, kubernetes, terraform, cloud, python, aws, azure, gcp, openstack',
      },
      {
        name: 'keywords',
        content: 'Open source, AI enthusiast, Cloud native, IaaC, Infraestructure as a code',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'Fernando Prieto',
      logo: {
        alt: 'logo',
        src: 'img/logo.webp',
        srcDark: 'img/logo.webp',
      },
      hideOnScroll: true,
      items: [
        { label: 'Project', position: 'right', to: 'project' },
        { label: 'Blog', position: 'right', to: 'blog', },
        { label: 'Nexus', position: 'right', 
          items: [
            { label: 'Archive', to: 'blog/archive' },
            { label: 'Resources', to: 'resources' },
            { label: 'Friends', to: 'friends' },
            {label: 'Docs', to: 'docs/projects'},
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Nexus',
          items: [
            { label: 'Blog', to: 'blog'},
            { label: 'Archive', to: 'blog/archive' },
            { label: 'Projects', to: 'project' },
            { label: 'Frontend Examples', to: 'https://example.kuizuo.cn' },
          ],
        },
        {
          title: 'Social Media',
          items: [
            { label: 'About me', to: '/about' },
            { label: 'LinkedIn', href: social.linkedin.href },
            { label: 'GitHub', href: social.github.href },
            { label: 'X', href: social.x.href },
            { label: 'Email', href: social.email.href },
            { label: 'Discord', href: social.discord.href },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'js', to: 'https://js-deobfuscator.kuizuo.cn' },
            { label: 'cyberChef', to: 'https://gchq.github.io/CyberChef' },
            { label: 'api', to: 'https://api.kuizuo.cn' },
            { label: 'Service', to: 'https://service.kuizuo.cn' },
            { label: 'Uptime', to: 'https://uptime.kuizuo.cn' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Friends', position: 'right', to: 'friends' },
            { label: 'Resources', position: 'right', to: 'resources' },
            {
              html: `
                <a href="https://docusaurus.io/" target="_blank" rel="noreferrer noopener">
                  <img src="/img/buildwith.png" alt="build with docusaurus" width="120" height="50"/>
                <a/>
                `,
            },
          ],
        },
      ],
      copyright: `
        <p>Copyright © 2023 - ${new Date().getFullYear()} | Built with Docusaurus.</p>
        `,
    },
    algolia: {
      appId: 'GV6YN1ODMO',
      apiKey: '50303937b0e4630bec4a20a14e3b7872',
      indexName: 'kuizuo',
    },
    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
      additionalLanguages: [ 'bash', 'json', 'java', 'python', 'php', 'graphql', 'rust', 'toml', 'protobuf' ],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    liveCodeBlock: { playgroundPosition: 'top' },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css'],
        },
        sitemap: {
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF',
          anonymizeIP: true,
        },
        debug: process.env.NODE_ENV === 'development',
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-image-zoom',
    '@docusaurus/plugin-ideal-image',
    [
      '@docusaurus/plugin-pwa',
      {
        debug: process.env.NODE_ENV === 'development',
        offlineModeActivationStrategies: [ 'appInstalled', 'standalone', 'queryString' ],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#12affa' },
        ],
      },
    ],
    [
      'vercel-analytics',
      {
        debug: process.env.NODE_ENV === 'development',
        mode: 'auto',
      },
    ],
    [
      './src/plugin/plugin-content-blog', //  blog，plugin-content-blog 
      {
        path: 'blog',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/fernandogprieto/blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: 'Cloud News: A Blog about Tecnhologies',
        blogSidebarCount: 10,
        blogSidebarTitle: 'Blogs',
        postsPerPage: 12,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'FGP',
          copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.>`,
        },
      },
    ],
    async function tailwindcssPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
    async function injectMotto() {
      return {
        name: 'docusaurus-motto',
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: 'script',
                innerHTML: `
    (${function () {
      console.log(
        `%c FGP Blog %c https://github.com/fernandogprieto/blog`,
        'color: #fff; margin: 1em 0; padding: 5px 0; background: #12affa;',
        'margin: 1em 0; padding: 5px 0; background: #efefef;',
      )
      const motto = `
This Webisite Powered By FGP Blog.
Written by Docusaurus.
--------
Love what you do and do what you love.
`
      if (document.firstChild?.nodeType !== Node.COMMENT_NODE) {
        document.prepend(document.createComment(motto))
      }
    }.toString()})();`,
              },
            ],
          }
        },
      }
    },
  ],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Personal blog',
      },
    },
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Normal.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Medium.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Semibold.min.css',
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
  onBrokenLinks: 'warn',
}

export default config
