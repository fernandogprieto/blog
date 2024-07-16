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
    { 
      label: 'Cloud Resume Challenge',
      type: 'category',
      link: {
        type: 'doc',
        id: 'projects/cloud-resume-challenge-gcp/crc-gcp-intro',
      },
      items: [
        'projects/cloud-resume-challenge-gcp/crc-gcp-week1',
      ],
    },
  ],
  
}

module.exports = sidebars
