export interface Project {
  id: string
  display_order: number
  number: string
  name: string
  description: string
  status: 'coming_soon' | 'live' | 'hidden'
  url: string | null
  tags: string[]
  visible: boolean
  created_at: string
}

export interface Settings {
  email: string
  github_url: string
  linkedin_url: string
  twitter_url: string
}
