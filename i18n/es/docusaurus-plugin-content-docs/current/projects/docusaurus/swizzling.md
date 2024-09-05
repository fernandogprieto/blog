---
id: docusaurus-swizzling 
slug: /docusaurus-swizzling 
title: Componente personalizado - Swizzling
authors: fernandogprieto
---
> [Swizzling](https://docusaurus.io/docs/swizzling)

En Docusaurus, la personalización del diseño y los componentes se logra a través de un proceso llamado `swizzling`. El swizzling te permite reemplazar un componente del tema con tu propia implementación, ya sea mediante [extraer](https://docusaurus.io/docs/swizzling#ejecting) o [envolver](https://docusaurus.io/docs/swizzling#wrapping).

```
npm run swizzle -- --list
```

```markdown title='Components available for swizzle in @docusaurus/theme-classic'
┌──────────────────────────────────────────┬───────────┬───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Component name                           │ Wrap      │ Eject     │ Description                                                                                                                      │
├──────────────────────────────────────────┼───────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CodeBlock                                │ Safe      │ Safe      │ The component used to render multi-line code blocks, generally used in Markdown files.                                           │
├──────────────────────────────────────────┼───────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ColorModeToggle                          │ Safe      │ Safe      │ The color mode toggle to switch between light and dark mode.                                                                     │
├──────────────────────────────────────────┼───────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DocCardList                              │ Safe      │ Safe      │ The component responsible for rendering a list of sidebar items cards.                                                           │
│                                          │           │           │ Notable used on the category generated-index pages.                                                                              │
├──────────────────────────────────────────┼───────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Footer                                   │ Safe      │ Safe      │ The footer component of you site's layout                                                                                        │
├──────────────────────────────────────────┼───────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Footer/Copyright                         │ Safe      │ Safe      │ The footer copyright                                                                                                             │
├──────────────────────────────────────────┼───────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Footer/Layout                            │ Safe      │ Safe      │ The footer main layout component                                                                                                 │
├──────────────────────────────────────────┼───────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Footer/LinkItem                          │ Safe      │ Safe      │ The footer link item component                                                                                                   │
├──────────────────────────────────────────┼───────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Footer/Links                             │ Safe      │ Safe      │ The footer component rendering the footer links                                                                                  │
├──────────────────────────────────────────┼───────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Footer/Links/MultiColumn                 │ Safe      │ Safe      │ The footer component rendering the footer links with a multi-column layout                                                       │
├──────────────────────────────────────────┼───────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Footer/Links/Simple                      │ Safe      │ Safe      │ The footer component rendering the footer links with a simple layout (single row)                                                │
├──────────────────────────────────────────┼───────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Footer/Logo                              │ Safe      │ Safe      │ The footer logo                                                                                                                  │
├──────────────────────────────────────────┼───────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Icon/Arrow                               │ Safe      │ Safe      │ The arrow icon component                                                                                                         │
├──────────────────────────────────────────┼───────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Icon/DarkMode                            │ Safe      │ Safe      │ The dark mode icon component.                                                                                                    │
├──────────────────────────────────────────┼───────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ThemedImage                              │ Unsafe    │ Unsafe    │ N/A                                                                                                                              │
└──────────────────────────────────────────┴───────────┴───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

:::danger ten cuidado
Asegúrate de comprender qué componentes pueden ser swizzled de manera segura. Algunos componentes podrían ser fundamentales para la implementación interna de un tema.
:::

## Configuración del tema

En mi caso, me gustaría realizar algunos cambios en mi página 404.

```bash
npm run swizzle @docusaurus/theme-classic NotFound -- --eject
```

- Este comando creará un nuevo archivo.js en la configuracion de tema:
```
sitio web
├── node_modules
│   └── @docusaurus/theme-classic
│       └── theme
│           └── NotFound.js
└── src
    └── theme
        └── NotFound.js
```
- Edita tu nuevo tema.

![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/swizzling.png)

:::tip Consejo
Envolver un tema es una excelente manera de agregar componentes adicionales alrededor de uno existente sin expulsarlo.
:::

:::caution Precaución
El swizzling en Docusaurus permite personalizaciones más profundas del sitio mediante la expulsión o el envoltorio de los componentes del tema. Sin embargo, expulsar componentes inseguros puede complicar las actualizaciones y el mantenimiento.
:::

:::info Información
No tengas demasiado miedo de swizzlear componentes inseguros: solo ten en cuenta que podrían ocurrir **cambios que rompen la compatibilidad** y que podrías necesitar actualizar tus personalizaciones manualmente en actualizaciones menores de la versión.
:::