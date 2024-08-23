---
id: docusaurus-configuration
slug: /docusaurus-configuration
title: Configuration file
authors: fernandogprieto
keywords: [docusaurus-config, google analytics, cloud-project]
---

## docusaurus.config.ts

`docusaurus.config.ts` This is the root of your website. 

You can customize various aspects of your site, such as the logo, site name, author name, announcement bar at the top, navigation bar, and footer at the bottom.

```typescript title='docusaurus.config.ts' icon='logos:docusaurus'
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
    image: 'img/logo.png',
    metadata: [
      {
        name: 'keywords',
        content: 'linux, docker, kubernetes, terraform, cloud, python, aws, azure, gcp, openstack',
      },
    ],
    // ...
  }

module.exports = config
```

For more information [docusaurus.config.ts | Docusaurus](https://docusaurus.io/docs/api/docusaurus-config)

## sidebar.js
Designed for organizing various documentation resources, such as technical articles from the blog, and recommended tools. Each item displayed in the sidebar corresponds to a Markdown file, which can be easily managed as they are all stored in the `doc` directory.

For more information [Sidebar | Docusaurus](https://docusaurus.io/docs/sidebar)

## About me
To modify this section, go to the `src/pages/about.md` file. 

## Social media
Feel free to customize this code to suit your own social media links  in `data/social.ts`

```typescript title='social.ts' icon='logos:typescript-icon'
export type Social = {
  linkedin?: string
  github?: string
  x?: string
  email?: string
  discord?: string
  spotify?: string
}
```

## Others configs 
### Google Analytics
- First, you need to create an account on [Google Analytics](https://analytics.google.com).
  
![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/ga-1.png)

- Click on `Next` and create your Property name.

![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/ga-2.png)

- Enter your Business information and select the appropriate category for your personal branding.

![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/ga-3.png)

- Accept the Google Analytics Terms of Service Agreement.
  
![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/ga-4.png)

- Choose a platform; in my case, I chose 'Web'.

![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/ga-5.png)

- Set up a data stream with your domain.

![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/ga-6.png)

- Copy your `MEASUREMENT ID`.

![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/ga-7.png)

> [Google Analytics Plugin | Docusaurus](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag)

### Plugin gtag
- Install this plugin in your project:
```
pnpm install --save @docusaurus/plugin-google-gtag
```

- Configure the preset option and paste the `MEASUREMENT ID`.
- 
```typescript title='docusaurus.config.ts' icon='logos:typescript-icon' 
module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        gtag: {
          trackingID: 'G-G76N5FK6BH',
          anonymizeIP: true,
        },
      },
    ],
  ],
};
```
