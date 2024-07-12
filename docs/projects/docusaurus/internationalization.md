---
id: docusaurus-internationalization 
slug: /docusaurus-internationalization 
title: Internationalization - i18n
authors: fernandogprieto
---

> [Internationalization(`18n) | Docusaurus](https://docusaurus.io/docs/i18n/introduction)

## Configure your site

Modify the`docusaurus.config.js` file to incorporate i18n support for the Spanish language, based on your preference.

```js title='docusaurus.config.js'
module.exports = {
   i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {label: 'en'},
      es: {label: 'es'},
    }
  },
};
```
## Theme Config 

Add a navigation bar item of the `localeDropdown` type, allowing users to choose their preferred language:

```js title='docusaurus.config.js'
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        {
          type: 'localeDropdown',
          position: 'left',
        },
      ],
    },
  },
};
```

Docusaurus, on its platform, includes an automatic translation feature that can be assessed through the following example:
```
npm run start -- --locale es
```

This tool provides preset translations for generic theme labels, such as "Next" and "Previous" in relation to pagination. You can explore the [default translations](https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-translations/locales) through the provided link.

## Translate
The docusaurus `write-translation` command will statically analyze all React code files used in your site, extract calls to these APIs, and aggregate them in the code.json file

```bash
npm run write-translations -- --locale es
```

```
website/i18n
     └── es
         ├── code.json                        
         ├── docusaurus-plugin-content-blog
         │   └── options.json
         ├── docusaurus-plugin-content-docs
         │   └── current.json
         └── docusaurus-theme-classic
             ├── footer.json
             └── navbar.json
```

To make modifications to the Docusaurus-theme-classic, you need to focus on the footer and navbar sections within the message area.

### Config your ID 

- The Translate component allows you to create multilingual Docusaurus websites, enabling translation of strings in your React components.

```
import Translate from '@docusaurus/Translate';
```

- Wrap the text you want to translate with the Translate component: 
  
```js title='src/pages/index.js'
function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className='row'>
          <div className='col col--6 justified'>
          <h1 className="hero__title">
            <Translate id="homepage.welcome"> Welcome to my Cloud Journey</Translate>
          </h1>
          <p>
            <Translate id="homepage.tags">#Cloud, #Innovation, #Technology, #OpenSource</Translate>
          </p>
          </div>
          <div className='col col--6 justified'>
              <img src="./svg/cloud.svg" />
            </div>
          </div>
        </div>
    </header>
  );
}
```
### code.json
- Add the translation strings to the respective ID
  
```json title='/i18n/es/code.json'
{
  "homepage.welcome": {
    "message": "Bienvenido a mi proyecto Cloud Journey",
    "description": "The title of website"
  },
  "homepage.tags": {
    "message": "#Nube, #Innovación, #Tecnología, #CódigoAbierto",
    "description": "A list of key topics displayed on the homepage as a slogan, highlighting the main themes of the website"
  },
}
```
### Markdown files 

You can translate docs, blog and pages only whit this command`

```bash
cp -r docs/** i18n/es/docusaurus-plugin-content-docs/current
cp -r blog/** i18n/es/docusaurus-plugin-content-blog
cp -r src/pages/** i18n/es/docusaurus-plugin-content-pages
```

When editing your docs, blog, and pages files in Docusaurus, it is important to only modify the title, as the same ID and slug configuration is shared across these files.

```md title='docs/projects/docusaurus/internationalization.md'
---
id: docusaurus-internationalization 
slug: /docusaurus-internationalization 
title: Internationalization - i18n 
---
```
```md title='i18n/es/docusaurus-plugin-content-docs/current/projects/docusaurus/internationalization.md'
---
id: docusaurus-internationalization 
slug: /docusaurus-internationalization 
title: Internacionalización - i18n // -- Edit
---
```
