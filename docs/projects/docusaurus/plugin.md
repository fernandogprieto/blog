---
id: docusaurus-plugin
slug: /docusaurus-plugin
title: Plugin
authors: fernandogprieto
---

```typescript title='docusaurus.config.ts' icon='logos:docusaurus'
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
]

```
