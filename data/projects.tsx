import { translate } from '@docusaurus/Translate';

export const projects: Project[] = [
  {
    title: translate({
      id: 'project.myCloudJourney.title',
      message: 'My Cloud Journey',
      description: 'Title for My Cloud Journey project',
    }),
    description: translate({
      id: 'project.myCloudJourney.description',
      message: '🖥️ Personal website that highlights my experiences, expertise, blog and tutorials in the cloud computing domains.',
      description: 'Description for My Cloud Journey project',
    }),
    preview: '/img/project/fernandogprieto.png',
    website: 'https://fernandogprieto.com/',
    source: 'https://github.com/fernandogprieto/fgp-website',
    docs: 'https://www.fernandogprieto.com/docs/docusuarus-intro',
    tags: ['opensource', 'favorite', 'personal', 'i18n'],
    type: 'cloud',
  },
  {
    title: '愧怍的小站',
    description: '🦖 基于 Docusaurus 静态网站生成器实现个人博客',
    preview: '/img/project/blog.png',
    website: 'https://kuizuo.cn',
    source: 'https://github.com/kuizuo/blog',
    docs: 'https://github.com/kuizuo/blog',
    tags: ['opensource', 'favorite'],
    type: 'cloud',
  },
  {
    title: 'JS代码反混淆',
    description: '基于 Babel 对 JavaScript 混淆代码还原的工具',
    preview: '/img/project/js-deobfuscator.png',
    website: 'https://js-deobfuscator.vercel.app',
    source: 'https://github.com/kuizuo/js-deobfuscator',
    tags: ['opensource', 'favorite'],
    type: 'cloud',
  },
  {
    title: 'Youni（校园社交平台）',
    description: '基于 React Native + NestJs 实现的一个校园社交平台应用',
    preview: '/img/project/youni.png',
    website: 'https://youni.vercel.app',
    source: 'https://github.com/kuizuo/youni',
    tags: ['large', 'product'],
    type: 'cloud',
  },
  {
    title: 'nest-vben-admin',
    description: ' NestJs + Vben Admin 编写的一款前后端分离的权限管理系统',
    preview: '/img/project/nest-vben-admin.png',
    website: 'https://admin.kuizuo.cn',
    source: 'https://github.com/kuizuo/nest-vben-admin',
    tags: ['opensource', 'favorite', 'product', 'large'],
    type: 'cloud',
  },
  {
    title: 'api-server',
    description: '🔗 基于 Nuxt 搭建的 API 接口服务网站',
    preview: '/img/project/kz-api.png',
    website: 'https://api.kuizuo.cn',
    source: 'https://github.com/kuizuo/api-service',
    tags: ['opensource', 'favorite', 'product'],
    type: 'cloud',
  },
  // collaboration
  {
    title: 'chaoxing-sign',
    description: '🌟 超星学习通在线签到，摆脱客户端繁琐的签到流程，让签到不再是你的烦恼',
    preview: '/img/project/chaoxing-sign.png',
    website: 'https://cx.kuizuo.cn',
    source: 'https://github.com/kuizuo/chaoxing-sign',
    tags: ['opensource', 'favorite'],
    type: 'collaboration',
  },
  {
    title: 'Nuxt-Naive-Admin',
    description: '🎁 一站式管理系统，融合 Nuxt、Naive UI 和 Supabase',
    preview: '/img/project/nuxt-naive-admin.png',
    website: 'https://nuxt-naive-admin.vercel.app',
    source: 'https://github.com/kuizuo/nuxt-naive-admin',
    tags: ['opensource'],
    type: 'collaboration',
  },
  // {
  //   title: 'Image Hosting',
  //   description: '🖼️ 使用 Supabase 搭建一个简易图床',
  //   preview: '/img/project/image-hosting.png',
  //   website: 'https://image.kuizuo.cn',
  //   source: 'https://github.com/kuizuo/image-hosting',
  //   tags: ['opensource'],
  //   type: 'web',
  // },
  // {
  //   title: 'Vitesse Nuxt3 Strapi',
  //   description: '一个 Vitesse Nuxt3 Strapi 的模板，灵感来源 Vitesse',
  //   preview: '/img/project/vitesse-nuxt3-strapi.png',
  //   website: 'https://vitesse-nuxt3-strapi.vercel.app',
  //   source: 'https://github.com/kuizuo/vitesse-nuxt3-strapi',
  //   tags: ['opensource'],
  //   type: 'web',
  // },
  // personal
  {
    title: 'vscode-extension',
    description: '自写 vscode 插件，提供了光标移动快捷键',
    preview: '/img/project/vscode-extension.png',
    website: 'https://marketplace.visualstudio.com/items?itemName=kuizuo.vscode-extension-sample',
    source: 'https://github.com/kuizuo/vscode-extension',
    tags: ['opensource'],
    type: 'personal',
  },
  {
    title: '前端示例代码库',
    description: '📦 整理前端样式和功能的实现代码，可以用来寻找灵感或直接使用示例中的代码',
    preview: '/img/project/example-website.png',
    website: 'https://example.kuizuo.cn',
    source: 'https://github.com/kuizuo/example',
    tags: ['opensource'],
    type: 'personal',
  },
  // {
  //   title: '@kuizuo/utils',
  //   description: '整理 JavaScript / TypeScript 的相关工具函数',
  //   website: 'https://www.npmjs.com/package/@kuizuo/utils',
  //   tags: ['opensource', 'personal'],
  //   type: 'personal',
  // },
  // {
  //   title: '@kuizuo/eslint-config',
  //   description: '来自 antfu 的 ESLint 配置文件',
  //   website: 'https://github.com/kuizuo/eslint-config',
  //   tags: ['opensource', 'personal'],
  //   type: 'personal',
  // },
  // commerce
  // {
  //   title: 'link-admin',
  //   description: '基于 nest-vben-admin 编写的一次性充值链接销售系统',
  //   preview: '/img/project/link-admin.png',
  //   website: 'http://link.kuizuo.cn',
  //   tags: ['product', 'large'],
  //   type: 'commerce',
  // },
  // {
  //   title: 'youni',
  //   description: '基于 nest-vben-admin 编写的一次性充值链接销售系统',
  //   preview: '/img/project/link-admin.png',
  //   website: 'http://link.kuizuo.cn',
  //   tags: ['product', 'large'],
  //   type: 'commerce',
  // },
  // other
  {
    title: '@kuizuo/http',
    description: '基于 Axios 封装的 HTTP 类库',
    website: 'https://www.npmjs.com/package/@kuizuo/http',
    tags: ['opensource', 'personal'],
    type: 'other',
  },
  {
    title: 'browser-rpc',
    description: 'WebSocket 远程调用浏览器函数',
    website: 'https://github.com/kuizuo/rpc-browser',
    tags: ['opensource'],
    type: 'other',
  },
  {
    title: 'ocr-server',
    description: '使用 nestjs 通过 grpc 与 python ddddocr 库搭建的验证码图像识别服务',
    website: 'https://github.com/kuizuo/ocr',
    tags: ['opensource'],
    type: 'other',
  },
  {
    title: 'rust-wasm-md5',
    description: '🦀 Rust + WebAssembly 实现的 MD5 加密',
    website: 'https://github.com/kuizuo/rust-wasm-md5',
    tags: ['opensource'],
    type: 'other',
  },
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'product' | 'large' | 'personal' | 'i18n'

export type ProjectType = 'cloud' | 'collaboration' | 'ai' | 'personal' | 'other'

export const projectTypeMap = {
  cloud: 'cloud',
  collaboration: 'collaboration',
  ai: 'AI',
  personal: 'personal',
    other: 'other',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  docs?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: translate({message: 'Favorite'}),
    description: translate({
      message:
        'favorite sites that you must absolutely check out!',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },
  opensource: {
    label: translate({message: 'Open-Source'}),
    description: translate({
      message: 'Open-Source can be useful for inspiration!',
      id: 'showcase.tag.opensource.description',
    }),
    color: '#39ca30',
  },
  product: {
    label: translate({message: 'Product'}),
    description: translate({
      message: 'Docusaurus sites associated to a commercial product!',
      id: 'showcase.tag.product.description',
    }),
    color: '#dfd545',
  },
  large: {
    label: translate({message: 'Large'}),
    description: translate({
      message:
        'Very large sites, including many more pages than the average!',
      id: 'showcase.tag.large.description',
    }),
    color: '#8c2f00',
  },
  personal: {
    label: translate({message: 'Personal'}),
    description: translate({
      message:
        'Personal websites, blog and documentation',
      id: 'showcase.tag.personal.description',
    }),
    color: '#14cfc3',
  },
  i18n: {
    label: translate({message: 'i18n'}),
    description: translate({
      message:
        'Translated  sites using the i18n support .',
      id: 'showcase.tag.i18n.description',
    }),
    color: '#127f82',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
