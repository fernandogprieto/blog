---
id: docusaurus-swizzling 
slug: /docusaurus-swizzling 
title: Custom Component - Swizzling 
authors: fernandogprieto
---
> [Swizzling](https://docusaurus.io/docs/swizzling)

In Docusaurus, customization of layout and components is achieved through a process called `swizzling.` Swizzling allows you to replace a theme component with your own implementation, either by [ejecting](https://docusaurus.io/docs/swizzling#ejecting ) or [wrapping](https://docusaurus.io/docs/swizzling#wrapping).

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
:::danger be safe
Make sure you comprehend which components can be safely swizzled. Some components might be integral to a theme's internal implementation.
:::

## Theme config

In my case I I would like to add a few changes in my 404 page. 

```bash 
npm run swizzle @docusaurus/theme-classic NotFound -- --eject
```

- This command wil be create a new file.js in theme:
```
website
├── node_modules
│   └── @docusaurus/theme-classic
│       └── theme
│           └── NotFound.js
└── src
    └── theme
        └── NotFound.js
```
- Edit your new theme.

![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/swizzling.png)

:::tip
Wrapping a theme is a great way to add extra components around existing one without ejecting it.
:::

:::caution
Swizzling in Docusaurus allows for deeper site customizations through ejecting or wrapping theme components. However, ejecting unsafe components can complicate updates and maintenance.
:::

:::info
Don't be too afraid to swizzle unsafe components: just keep in mind that **breaking changes** might happen, and you might need to upgrade your customizations manually on minor version upgrades.
:::