export interface Project {
  name: string
  description: string
  link: string
  thumbnail: string
  id: string
}

export interface WorkExperience {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

export interface BlogPost {
  title: string
  description: string
  link: string
  uid: string
}

export interface SocialLink {
  label: string
  link: string
}
