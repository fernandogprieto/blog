import Translate, { translate } from '@docusaurus/Translate'
import { Icon } from '@iconify/react/dist/iconify.js'
import AiSvg from '@site/static/svg/undraw_artificial_intelligence.svg'
import CloudEngineerSvg from '@site/static/svg/undraw_cloud_hosting.svg'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'

export type FeatureItem = {
  title: string | React.ReactNode
  description: string | React.ReactNode
  header: React.ReactNode
  icon?: React.ReactNode
}

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: 'Cloud Engineer',
    }),
    description: (
      <Translate>
        Migrating and configuring cloud infrastructure, networking, and security services, utilizing monitoring and observability tools
      </Translate>
    ),
    header: <CloudEngineerSvg className={'h-auto w-full'} height={150} role="img" />,
    icon: <Icon icon="logos:python" className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: 'AI Enthusiast',
    }),
    description: (
      <Translate>
        Learning about AI technologies and staying updated with the latest advancements, focusing on infrastructure-related AI projects.
      </Translate>
    ),
    header: <AiSvg className={'h-auto w-full'} height={150} role="img" />,
  },
  {
    title: translate({
      id: 'homepage.feature.opensource',
      message: 'Open Source Advocate',
    }),
    description: (
      <Translate>
        I promote open source projects because they lead to innovative solutions and modifications, supporting the community in various ways and encouraging involvement.
      </Translate>
    ),
    header: <OpenSourceSvg className={'h-auto w-full'} height={150} role="img" />,
  },
]

export default FEATURES
