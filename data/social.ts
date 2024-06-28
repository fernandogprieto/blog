export type Social = {
  linkedin?: string
  github?: string
  x?: string
  email?: string
  discord?: string
  spotify?: string
}

type SocialValue = {
  href?: string
  title: string
  icon: string
  color: string
}

const social: Social = {
  linkedin: 'https://www.linkedin.com/in/fernandogprieto/',
  github: 'https://github.com/fernandogprieto',
  x: 'https://x.com/fernandogprieto',
  email: 'mailto:prieto.fernandog@gmail.com',
  discord: 'https://discord.gg/Gjx5SfsxXA',
  spotify: 'https://open.spotify.com/user/3132r43u32abukk6v3gwbbm64vx4?si=zvwdPqx8Tw6V3ylNvN2ssQ',
}

const socialSet: Record<keyof Social | 'rss', SocialValue> = {
  linkedin: {
    href: social.linkedin,
    title: 'LinkedIn',
    icon: 'ri:linkedin-line',
    color: '#0A66C2',
  },
  github: {
    href: social.github,
    title: 'GitHub',
    icon: 'ri:github-line',
    color: '#010409',
  },
  x: {
    href: social.x,
    title: 'X',
    icon: 'ri:twitter-x-line',
    color: '#000',
  },
  email: {
    href: social.email,
    title: 'Mail',
    icon: 'ri:mail-line',
    color: '#D44638',
  },
  discord: {
    href: social.discord,
    title: 'Discord',
    icon: 'ri:discord-line',
    color: '#5A65F6',
  },
  spotify: {
    href: social.spotify,
    title: 'Spotify',
    icon: 'ri:spotify-line',
    color: '#1DB954',
  },
  rss: {
    href: '/blog/rss.xml',
    title: 'RSS',
    icon: 'ri:rss-line',
    color: '#FFA501',
  },
}

export default socialSet
