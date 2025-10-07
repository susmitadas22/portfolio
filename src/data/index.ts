import { Project, SocialLink, WorkExperience } from '~/types'

export const PROJECTS: Project[] = [
  {
    name: 'back2fits - shopify store',
    description:
      'sustainable fashion brand focused on upcycled, eco-friendly apparel.',
    link: 'https://back2fits.store',
    thumbnail: '/images/back2fits.png',
    id: 'project0',
  },
  {
    name: 'mini crm - ai customer segmentation',
    description:
      'lightweight CRM w/ rule-based filtering + Gemini AI insights.',
    link: 'https://mini-crm-mauve-two.vercel.app/',
    thumbnail: '/images/mini-crm.png',
    github: 'https://github.com/susmitadas22/mini-crm',
    id: 'project1',
  },
  {
    name: 'trubuy - decentralized marketplace',
    description:
      'web3 product marketplace with escrow logic and loyalty rewards (ERC-20).',
    link: 'https://trubuy.vercel.app',
    github: 'https://github.com/susmitadas22/trubuy',
    thumbnail: '/images/trubuy.png',
    id: 'project2',
  },
  {
    name: 'kisan mitra - crop disease alert app',
    description:
      'app to detect crop diseases from photos + crowdsourced alerts',
    link: 'https://github.com/susmitadas22/kisan-mitra',
    github: 'https://github.com/susmitadas22/kisan-mitra',
    thumbnail: '/images/kisan-mitra.webp',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'back2fits',
    title: 'founder & designer',
    start: '2025',
    end: 'Present',
    link: 'https://back2fits.store',
    id: 'work1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/susmitadas22',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/susmitadas222/',
  },
]

export const EMAIL = 'mail@sushh.me'

export const WEBSITE_URL = 'https://sushh.me'
