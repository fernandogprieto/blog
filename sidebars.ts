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
}

module.exports = sidebars
