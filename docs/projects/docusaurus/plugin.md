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

## [plugin-image-zoom](https://gabrielcsapo.github.io/docusaurus-plugin-image-zoom/docs/getting-started/)

Docusaurus Plugin

## plugin-sass

Support for SASS preprocessors

## [plugin-pwa](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-pwa)

Create a PWA documentation site that supports offline mode and app installation.

## plugin-content-blog

Since the official  [plugin-content-blog](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog) plugin does not set the data about the blog to the global, it can only be obtained in the blog list page component, and since some components of this blog need to use part of the data, the blog information is added to the global data, and the information of all blog posts can be accessed in any page.BlogListPageplugin-content-blog

```typescript title='src/plugin/plugin-content-blog.ts'
async function blogPluginEnhanced(context, options) {
  const blogPluginInstance = await blogPlugin(context, options)

  return {
    ...blogPluginInstance,
    async contentLoaded({ content, allContent, actions }) {
      // Create default plugin pages
      await blogPluginInstance.contentLoaded({ content, allContent, actions })

      // Create your additional pages
      const { blogPosts, blogTags } = content
      const { setGlobalData } = actions

      setGlobalData({
        posts: blogPosts.slice(0, 10), // Only store 10 posts
        postNum: blogPosts.length,
        tagNum: Object.keys(blogTags).length,
      })
    },
  }
}
```
