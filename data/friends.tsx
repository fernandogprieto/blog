export const Friends: Friend[] = [
  {
    title: 'MasterVitronic',
    description: 'Director of Research and Development',
    website: 'https://www.linkedin.com/in/master-vitronic/',
    avatar: 'img/friend/vitronic.png',
  },
  {
    title: 'Cesar',
    description: 'Senior Odoo Developer',
    website: 'https://www.linkedin.com/in/cesar-augusto-chirinos-brice%C3%B1o-dev-odoo/',
    avatar: '/img/friend/cesar.jpeg',
  },
  {
    title: 'Luis R.',
    description: 'Cloud Engineer',
    website: 'https://www.linkedin.com/in/edulramirez/',
    avatar: '/img/friend/luisr.jpeg',
  },
  {
    title: 'Anthony',
    description: 'Java Microservices Engineer',
    website: 'https://www.linkedin.com/in/aapiro/',
    avatar: '/img/friend/anthony.jpeg',
  },
  {
    title: 'Arturo',
    description: 'FrontEnd & Shopify Developer',
    website: 'https://github.com/Arqturo',
    avatar: '/img/friend/arturo.png',
  },
  {
    title: 'Lemys',
    description: 'A venezuelan weird guy',
    website: 'https://github.com/lemyskaman',
    avatar: '/img/friend/lemys.jpeg',
  },
  {
    title: 'Leopoldo',
    description: 'QA Automation Tester',
    website: 'https://www.linkedin.com/in/leopoldo-guillen-86b3a359/',
    avatar: '/img/friend/zaim.jpeg',
  },
  {
    title: 'Luis L.',
    description: 'Backend Developer, Java EE',
    website: 'https://www.linkedin.com/in/luis-alfredo-luna/',
    avatar: '/img/friend/arturo.png',
  },
  {
    title: 'Braymi',
    description: 'Telecommunications Engineer & Elevated Tower Technician',
    website: 'https://www.linkedin.com/in/braymi-jimenez/',
    avatar: '/img/friend/braymi.jpeg',
  },
  {
    title: 'Jhon',
    description: 'Full Stack Developer',
    website: 'https://www.linkedin.com/in/john-alexander-soto/',
    avatar: '/img/friend/jhon.jpeg',
  },
  {
    title: 'kuizuo',
    description: 'TypeScript enthusiast, Node.js user, learned Python, Rust beginner.',
    website: 'https://github.com/kuizuo',
    avatar: '/img/friend/kuizuo.png',
  }
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: string
}
