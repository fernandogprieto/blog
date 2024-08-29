<h2 align="center">
Fernando's Personal Blog
</h2>

<p align="center">
<a href="https://vercel.com/new/clone?repository-url=https://github.com/fernandogprieto/blog/tree/main&project-name=blog&repo-name=blog" rel="nofollow"><img src="https://vercel.com/button"></a>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/fernandogprieto/blog" rel="nofollow"><img src="https://www.netlify.com/img/deploy/button.svg"></a>
<a href="https://stackblitz.com/github/fernandogprieto/blog" rel="nofollow"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"></a>
</p>

## 👋 Introduction

Welcome to my journey where cloud computing, AI, and open source innovation intersect. Join me to solve problems and apply practical solutions. Ready?

If you want to build a similar site, you can directly [Fork](https://github.com/kuizuo/fernandogprieto/fork) this repository or run this project online through [StackBlitz](https://stackblitz.com/github/fernandogprieto/blog). You can also deploy it with one click via [Vercel](https://vercel.com/new/clone?repository-url=https://github.com/fernandogprieto/blog/tree/main&project-name=blog&repo-name=blog).

## ✨ Features

- 🦖 **Docusaurus** - Based on Docusaurus, providing powerful documentation generation and blog features.
- ✍️ **Markdown** - Easy writing with Markdown.
- 🎨 **Beautiful** - Clean, beautiful, prioritizes reading experience.
- 🖥️ **PWA** - Supports PWA, installable, usable offline.
- 🌐 **i18n** - Supports internationalization.
- 💯 **SEO** - Search engine optimization, easy to index.
- 📊 **Google Analytics** - Supports Google Analytics.
- 🔎 **Full-text Search** - Supports [Algolia DocSearch](https://github.com/algolia/docsearch).
- 🚀 **Continuous Integration** - Supports CI/CD, automatically deploys updates.
- 🏞️ **Home View** - Displays the latest blog posts, project showcases, personal traits, tech stacks, etc.
- 🗃️ **Blog Post Views** - Different blog post views: list, grid.
- 🌈 **Resource Navigation** - Collect and share useful and interesting resources.
- 📦 **Project Showcase** - Showcase your projects, can be used as a portfolio.

My theme customization implementation: [Docusaurus Theme Customization](https://www.fernandogprieto.com/docs/docusuarus-intro)

## :wrench: Tech Stack

- Docusaurus
- TailwindCSS
- Framer Motion & MagicUI

## 📊 Directory Structure

```bash
├── blog                           # Blog
│   ├── first-blog.md
├── docs                           # Documentation/Notes
│   └── doc.md
├── data
│   ├── feature.tsx                # Features
│   ├── friends.tsx                # Friend Links
│   ├── projects.tsx               # Projects
│   ├── skills.tsx                 # Tech Stack
│   ├── resources.tsx              # Resources
│   └── social.ts                  # Social Links
├── i18n                           # Internationalization
├── src
│   ├── components                 # Components
│   ├── css                        # Custom CSS
│   ├── pages                      # Custom Pages
│   ├── plugin                     # Custom Plugins
│   └── theme                      # Custom Theme Components
├── static                         # Static Assets
│   └── img                        # Static Images
├── docusaurus.config.ts           # Site Configuration
├── sidebars.ts                    # Sidebar for Docs
├── package.json
├── tsconfig.json
└── pnpm-lock.yaml
```

## 📥 Running

```bash
git clone https://github.com/fernandogprieto/blog.git
cd blog
pnpm install
pnpm start
```

## 🏗️ Build

```bash
pnpm build
```

<!-- ## 📷 Screenshots

<img width="1471" alt="Live Demo" src="https://github.com/kuizuo/blog/blob/main/static/img/og.png?raw=true"> -->

## 📝 License

[MIT](./LICENSE)