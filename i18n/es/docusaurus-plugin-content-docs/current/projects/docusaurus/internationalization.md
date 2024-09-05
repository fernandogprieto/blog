---
id: docusaurus-internationalization 
slug: /docusaurus-internationalization 
title: Internacionalización- i18n
authors: fernandogprieto
---

> [Internationalization(`18n) | Docusaurus](https://docusaurus.io/docs/i18n/introduction)

## Configura tu sitio

Modifica el archivo `docusaurus.config.js` para incorporar soporte i18n para el idioma español, según tu preferencia.

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
## Configuración del tema

Agrega un elemento de navegación del tipo `localeDropdown` en la barra de navegación, permitiendo a los usuarios elegir su idioma preferido:

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

Docusaurus, en su plataforma, incluye una función de traducción automática que puede ser evaluada mediante el siguiente ejemplo:
```
npm run start -- --locale es
```

Esta herramienta ofrece traducciones preestablecidas para etiquetas genéricas de temas, como "Siguiente" y "Anterior" en relación con la paginación. Puedes explorar las [traducciones predefinidas](https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-translations/locales) a través del enlace proporcionado.

## Traducir
El comando `write-translation` de Docusaurus analizará estáticamente todos los archivos de código React utilizados en tu sitio, extraerá llamadas a estas API y las agregará en el archivo code.json.

```bash
npm run write-translations -- --locale es
```

```
yourwebsite/i18n
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
Para realizar modificaciones en el Docusaurus-theme-classic, debes enfocarte en las secciones de pie de página y barra de navegación dentro del área de mensajes.

### Configurar tu ID

- El componente Translate te permite crear sitios web multilingües de Docusaurus, permitiendo la traducción de cadenas de texto en tus componentes React.

```
import Translate from '@docusaurus/Translate';
```

- Envuelve el texto que deseas traducir con el componente Translate:

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
- Añade las cadenas de traducción a los respectivos ID

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
### Archivos Markdown

Puedes traducir documentos, blogs y páginas usando este comando:

```
cp -r docs/** i18n/es/docusaurus-plugin-content-docs/current
cp -r blog/** i18n/es/docusaurus-plugin-content-blog
cp -r src/pages/** i18n/es/docusaurus-plugin-content-pages
```

Al editar tus archivos de documentos, blogs y páginas en Docusaurus, es importante modificar únicamente el título, ya que la misma configuración de ID y slug se comparte entre estos archivos.

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
