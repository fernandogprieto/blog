
<h2 align="center">
Blog Personal de Fernando
</h2>

<p align="center">
<a href="https://vercel.com/new/clone?repository-url=https://github.com/fernandogprieto/blog/tree/main&project-name=blog&repo-name=blog" rel="nofollow"><img src="https://vercel.com/button"></a>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/fernandogprieto/blog" rel="nofollow"><img src="https://www.netlify.com/img/deploy/button.svg"></a>
<a href="https://stackblitz.com/github/fernandogprieto/blog" rel="nofollow"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"></a>
</p>

## 👋 Introducción

Bienvenido a mi viaje donde la computación en la nube, la IA y la innovación de código abierto se intersectan. Únete a mí para resolver problemas y aplicar soluciones prácticas. ¿Listo?

Si quieres construir un sitio similar, puedes [Forkear](https://github.com/kuizuo/fernandogprieto/fork) este repositorio o ejecutar este proyecto en línea a través de [StackBlitz](https://stackblitz.com/github/fernandogprieto/blog). También puedes desplegarlo con un clic a través de [Vercel](https://vercel.com/new/clone?repository-url=https://github.com/fernandogprieto/blog/tree/main&project-name=blog&repo-name=blog).

## ✨ Características

- 🦖 **Docusaurus** - Basado en Docusaurus, proporcionando potentes características de generación de documentación y blog.
- ✍️ **Markdown** - Escritura fácil con Markdown.
- 🎨 **Elegante** - Limpio, hermoso, prioriza la experiencia de lectura.
- 🖥️ **PWA** - Soporta PWA, instalable, usable sin conexión.
- 🌐 **i18n** - Soporta internacionalización.
- 💯 **SEO** - Optimización para motores de búsqueda, fácil de indexar.
- 📊 **Google Analytics** - Compatible con Google Analytics.
- 🔎 **Búsqueda de Texto Completo** - Soporta [Algolia DocSearch](https://github.com/algolia/docsearch).
- 🚀 **Integración Continua** - Compatible con CI/CD, despliega actualizaciones automáticamente.
- 🏞️ **Vista de Inicio** - Muestra las últimas publicaciones del blog, proyectos, características personales, stacks tecnológicos, etc.
- 🗃️ **Vistas de Publicaciones del Blog** - Diferentes vistas de publicaciones del blog: lista, cuadrícula.
- 🌈 **Navegación de Recursos** - Recolecta y comparte recursos útiles e interesantes.
- 📦 **Muestra de Proyectos** - Muestra tus proyectos, puede usarse como un portafolio.

Mi implementación de personalización de tema: [Personalización del Tema de Docusaurus](https://www.fernandogprieto.com/docs/docusuarus-intro)

## :wrench: Stack Tecnológico

- Docusaurus
- TailwindCSS
- Framer Motion & MagicUI

## 📊 Estructura del Directorio

```bash
├── blog                           # Blog
│   ├── first-blog.md
├── docs                           # Documentación/Notas
│   └── doc.md
├── data
│   ├── feature.tsx                # Características
│   ├── friends.tsx                # Enlaces de Amigos
│   ├── projects.tsx               # Proyectos
│   ├── skills.tsx                 # Stack Tecnológico
│   ├── resources.tsx              # Recursos
│   └── social.ts                  # Enlaces Sociales
├── i18n                           # Internacionalización
├── src
│   ├── components                 # Componentes
│   ├── css                        # CSS Personalizado
│   ├── pages                      # Páginas Personalizadas
│   ├── plugin                     # Plugins Personalizados
│   └── theme                      # Componentes del Tema Personalizado
├── static                         # Activos Estáticos
│   └── img                        # Imágenes Estáticas
├── docusaurus.config.ts           # Configuración del Sitio
├── sidebars.ts                    # Barra Lateral para Docs
├── package.json
├── tsconfig.json
└── pnpm-lock.yaml
```

## 📥 Ejecución

```bash
git clone https://github.com/fernandogprieto/blog.git
cd blog
pnpm install
pnpm start
```

## 🏗️ Compilación

```bash
pnpm build
```

## 📝 Licencia

[MIT](./LICENSE)
