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

Plugin de Docusaurus

## plugin-sass

Soporte para preprocesadores SASS

## [plugin-pwa](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-pwa)

Crea un sitio de documentación PWA que soporte el modo sin conexión y la instalación de aplicaciones.

## plugin-content-blog

Dado que el plugin oficial [plugin-content-blog](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog) no establece los datos sobre el blog a nivel global, solo se puede obtener en el componente de la página de lista del blog. Y dado que algunos componentes de este blog necesitan usar parte de los datos, la información del blog se ha agrega a los datos globales, por lo que se puede acceder a la información de todas las entradas del blog desde cualquier página.

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
