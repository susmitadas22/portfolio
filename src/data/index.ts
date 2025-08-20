import { BlogPost, Project, SocialLink, WorkExperience } from '~/types'

export const PROJECTS: Project[] = [
  {
    name: 'mini crm - ai customer segmentation',
    description:
      'lightweight CRM w/ rule-based filtering + Gemini AI insights.',
    link: 'https://github.com/susmitadas22/mini-crm',
    thumbnail: '/images/mini-crm.webp',
    id: 'project1',
  },
  {
    name: 'trubuy - decentralized marketplace',
    description:
      'web3 product marketplace with escrow logic and loyalty rewards (ERC-20).',
    link: 'https://github.com/susmitadas22/trubuy',
    thumbnail: '/images/trubuy.webp',
    id: 'project2',
  },
  {
    name: 'kisan mitra - crop disease alert app',
    description:
      'app to detect crop diseases from photos + crowdsourced alerts',
    link: 'https://github.com/susmitadas22/kisan-mitra',
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

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'AI in modern Web Development',
    description: 'A deep dive into the intersection of AI and web development.',
    link: '/posts/ai',
    uid: 'blog-2',
  },
  {
    title: 'P2P Video Streaming with WebRTC',
    description:
      'A deep dive into building a peer-to-peer video streaming application using WebRTC.',
    link: '/posts/p2p',
    uid: 'blog-1',
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
