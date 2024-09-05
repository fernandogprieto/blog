---
id: docusaurus-configuration
slug: /docusaurus-configuration
title: Archivo de configuración
authors: fernandogprieto
keywords: [docusaurus-configuración, google analytics, proyecto de nube]
---
> [docusaurus.config.js | Docusaurus](https://docusaurus.io/docs/api/docusaurus-config)

## docusaurus.config.js
Puedes personalizar diversos elementos de tu sitio web para adaptarlos a tus necesidades y preferencias únicas, incluyendo el logotipo, nombre del sitio, nombre del autor, barra de anuncios en la parte superior, barra de navegación y pie de página en la parte inferior. El archivo de configuración te permite personalizar ampliamente tu sitio web, ofreciendo una amplia gama de opciones de personalización.

```javascript title='docusaurus.config.js'
const config = {
  title: 'Fernando G. Prieto | IT Specialist and Cloud Computing Training',
  titleDelimiter: '-',
  tagline: "IT Specialist specializing in professional development and technological trends. Currently pursuing Cloud Engineering certifications with a focus on cloud-native, open-source, and AI technologies.",
  favicon: 'img/favicon.ico',
  url: 'https://fernandogprieto.com',
  baseUrl: '/',
  projectName: 'fgp-website',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/it.png',
    metadata: [
        {
          name: 'keywords',
          content: 'My Cloud Journey',
        },
        {
          name: 'keywords',
          content: 'blog, projects, python, multi-cloud, kubernetes',
        },
        {
          name: 'keywords',
          content: 'Open source enthusiast, Cloud native, IT Advisor, Infraestructure as a code',
        },
    ]
  },
}, 

module.exports = config
```
Puedes asegurarte de que tu sitio refleje tu marca, proporcione información esencial a los usuarios y presentar  tu marca personal.

> [Sidebar | Docusaurus](https://docusaurus.io/docs/sidebar)

## sidebar.js
En esta sección del sitio web, encontrarás una barra lateral configurable diseñada para organizar varios recursos de documentación, como artículos técnicos del blog y herramientas recomendadas. Cada elemento mostrado en la barra lateral corresponde a un archivo Markdown, que puede ser administrado fácilmente, ya que todos se almacenan en el directorio `doc`.

## Sobre mí
Para modificar esta sección, dirígete al archivo `src/pages/about/index.js`. Las imágenes SVG presentadas en el sitio provienen de [Svg Repo](https://www.svgrepo.com/) y se organizan en los directorios `static/img/` y `static/svg/` para imágenes y archivos SVG, respectivamente. Creé mi distintivo avatar usando Lensa, una herramienta innovadora ofrecida por Prisma AI. Visita [Lensa](https://prisma-ai.com/lensa) para explorar sus capacidades y crear tus propios avatares personalizados o mejorar imágenes existentes.

## Redes Sociales
Puedes modificar este código para tus propios enlaces de redes sociales:
```js
<div className="svg_row" >
              <a href="mailto:prieto.fernandog@gmail.com" target="_blank" rel="noopener noreferrer">
                <ThemedImage
                  alt="Email icon"
                  sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/email.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/email-light.svg',
                  }}
                />
              </a>
              <a href="https://open.spotify.com/user/3132r43u32abukk6v3gwbbm64vx4?si=a0b6dbdbab8b4688&nd=1" target="_blank" rel="noopener noreferrer">
                <ThemedImage
                  alt="Spotify icon"
                  sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/spotify.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/spotify-light.svg',
                  }}
                />
              </a>
              <a href="https://discord.gg/zAZC37Mfxp" target="_blank" rel="noopener noreferrer">
                <ThemedImage
                  alt="Discord icon"
                  sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/discord.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/discord-light.svg',
                  }}
                />
              </a>
              <a href="https://twitter.com/fernandogprieto" target="_blank" rel="noopener noreferrer">
                <ThemedImage
                  alt="Twitter icon"
                  sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/twitter.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/twitter-light.svg',
                  }}
                />
              </a>
              <a href="https://www.linkedin.com/in/fernando-prieto-carabobo/" target="_blank" rel="noopener noreferrer">
                <ThemedImage
                  alt="LinkedIn icon"
                  sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/linkedin.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/linkedin-light.svg',
                  }}
                />
```
## Otras configuraciones
### Google Analytics
- Primero, necesitas crear una cuenta en [Google Analytics](https://analytics.google.com).

![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/ga-1.png)

- Haz clic en `Siguiente` y crea el nombre de tu propiedad.

![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/ga-2.png)

- Ingresa la información de tu negocio y selecciona la categoría adecuada para tu marca personal.

![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/ga-3.png)

- Acepta el Acuerdo de Términos de Servicio de Google Analytics.

![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/ga-4.png)

- Elige una plataforma; en mi caso, elegí 'Web'.

![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/ga-5.png)

- Configura un flujo de datos con tu dominio.

![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/ga-6.png)

- Copia tu `ID DE MEDICIÓN`.

![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/ga-7.png)

> [Plugin de Google Analytics | Docusaurus](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag)

### Plugin gtag
- Instala este plugin en tu proyecto:
```
npm install --save @docusaurus/plugin-google-gtag
```

- Configura la opción de preajuste y pega el `ID DE MEDICIÓN`.

```js title=docusaurus.config.js
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
