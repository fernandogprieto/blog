import { translate } from '@docusaurus/Translate';

export const projects: Project[] = [
  // cloud
  {
    title: translate({
      id: 'project.myCloudJourney.title',
      message: 'My Cloud Journey',
      description: 'Title for My Cloud Journey project',
    }),
    description: translate({
      id: 'project.myCloudJourney.description',
      message: '🦖 Personal website that highlights my experiences, expertise, blog and tutorials in the field of technology.',
      description: 'Description for My Cloud Journey project',
    }),
    preview: '/img/project/docusaurus/fernandogprieto.png',
    website: 'https://fernandogprieto.com/',
    source: 'https://github.com/fernandogprieto/fgp-website',
    docs: 'https://www.fernandogprieto.com/docs/docusuarus-intro',
    tags: ['opensource', 'favorite', 'personal', 'i18n'],
    type: 'cloud',
  },
  {
    title: translate({
      id: 'project.cloudResumeChallenge.title',
      message: 'Cloud Resume Challenge',
      description: 'Title for Cloud Resume Challenge project',
    }),
    description: translate({
      id: 'project.cloudResumeChallenge.description',
      message: '📚 Build and deploy a personal resume website using Google Cloud Platform services, showcasing cloud technology expertise and hands-on experience.',
      description: 'Description for Cloud Resume Challenge project',
    }),
    preview: '/img/project/docusaurus/crc-gcp.png',
    website: 'https://www.fernandogprieto.dev',
    source: 'https://github.com/fernandogprieto/cloud-resume-challenge-gcp',
    docs: 'https://www.fernandogprieto.com/docs/crc-gcp-intro',
    tags: ['opensource', 'favorite'],
    type: 'cloud',
  },
  // collaboration
  {
    title: translate({
      id: "project.discordproject.title",
      message: 'Discord Project Community',
      description: 'Title for Collaboration Discord project GCP',
    }),
    description: translate({
      id: 'project.discordproject.description',
      message: '💬 Build and improve a discord server for a Google Comunity Cloud Santiago',
      description: 'Description for GDGCloudSantiago Discord Project',
    }),
    preview: '/img/project/collaboration/gdgcloudsantiago-discord.png',
    website: 'https://discord.gg/Yx9NfVSH49',
    source: 'https://github.com/gdgcloudsantiago/discord-project-community',
    docs: 'https://www.fernandogprieto.com/docs/gdg-discord-intro',
    tags: ['opensource', 'i18n'],
    type: 'collaboration',
  },
  // personal

  // commerce

  // other
  {
    title: translate({
      id: 'project.dotfiles.title',
      message: 'Dotfiles',
      description: 'Title for Dotfiles project',
    }),
    description: translate({
      id: 'project.dotfiles.description',
      message: 'scripts, dotfiles, qtile, bash-profile',
      description: 'Description for Dotfiles project',
    }),
    website: 'https://github.com/fernandogprieto/dotfiles',
    tags: ['opensource', 'personal'],
    type: 'other',
  },
  //AI
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'product' | 'large' | 'personal' | 'i18n'

export type ProjectType = 'cloud' | 'collaboration' | 'ai' | 'personal' | 'other'

export const projectTypeMap = {
  cloud: { label: translate({ id: 'projectType.cloud', message: 'Cloud' }) }, 
  collaboration: { label: translate({ id: 'projectType.collaboration', message: 'Colaboration', }) },
  ai: { label: translate({ id: 'projectType.ai', message: 'AI' }) },
  personal: { label: translate({ id: 'projectType.personal', message: 'Personal' }) },
  other: { label: translate({ id: 'projectType.other', message: 'Others' }) },
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  docs?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: translate({message: 'Favorite'}),
    description: translate({
      message:
        'favorite sites that you must absolutely check out!',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },
  opensource: {
    label: translate({message: 'Open-Source'}),
    description: translate({
      message: 'Open-Source can be useful for inspiration!',
      id: 'showcase.tag.opensource.description',
    }),
    color: '#39ca30',
  },
  product: {
    label: translate({message: 'Product'}),
    description: translate({
      message: 'Docusaurus sites associated to a commercial product!',
      id: 'showcase.tag.product.description',
    }),
    color: '#dfd545',
  },
  large: {
    label: translate({message: 'Large'}),
    description: translate({
      message:
        'Very large sites, including many more pages than the average!',
      id: 'showcase.tag.large.description',
    }),
    color: '#8c2f00',
  },
  personal: {
    label: translate({message: 'Personal'}),
    description: translate({
      message:
        'Personal websites, blog and documentation',
      id: 'showcase.tag.personal.description',
    }),
    color: '#14cfc3',
  },
  i18n: {
    label: translate({message: 'i18n'}),
    description: translate({
      message:
        'Translated  sites using the i18n support .',
      id: 'showcase.tag.i18n.description',
    }),
    color: '#127f82',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
