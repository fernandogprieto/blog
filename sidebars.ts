import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  projects: [
    'projects/welcome',
    {
      label: 'Docusaurus',
      type: 'category',
      link: {
        type: 'doc',
        id: 'projects/docusaurus/docusaurus-intro',
      },
      items: [
        'projects/docusaurus/docusaurus-configuration',
        'projects/docusaurus/docusaurus-search',
        'projects/docusaurus/docusaurus-internationalization',
        'projects/docusaurus/docusaurus-swizzling',
        'projects/docusaurus/docusaurus-deploy',
      ],
    },
  ],
  tools: [
    'tools/introduction',
    'tools/everything-quick-search-local-files',
    'tools/wappalyzer-recognize-technology',
    'tools/windows-custom-right-click-menu',
    'tools/vscode-config',
    'tools/idea-config',
    'tools/vite-plugin',
    'tools/jetbrains-product-activation-method',
  ],
}

module.exports = sidebars
