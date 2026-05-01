import { createClient } from './supabase/server'
import type { Project, Settings } from '@/types'

function hasSupabaseConfig() {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
}

export async function getProjects(): Promise<Project[]> {
  if (!hasSupabaseConfig()) return []
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('visible', true)
      .order('display_order', { ascending: true })
    if (error) { console.error('getProjects error:', error); return [] }
    return data ?? []
  } catch (e) {
    console.error('getProjects:', e)
    return []
  }
}

export async function getAllProjects(): Promise<Project[]> {
  if (!hasSupabaseConfig()) return []
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('display_order', { ascending: true })
  if (error) throw error
  return data ?? []
}

export async function getProjectById(id: string): Promise<Project | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single()
  if (error) throw error
  return data
}

export async function getSettings(): Promise<Settings> {
  if (!hasSupabaseConfig()) return defaultSettings()
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('settings')
      .select('key, value')
    if (error) { console.error('getSettings error:', error); return defaultSettings() }
    const map: Record<string, string> = {}
    for (const row of data ?? []) map[row.key] = row.value
    return {
      email: map.email ?? 'hi@buildfox.space',
      github_url: map.github_url ?? 'https://github.com',
      linkedin_url: map.linkedin_url ?? 'https://linkedin.com',
      twitter_url: map.twitter_url ?? 'https://twitter.com',
    }
  } catch (e) {
    console.error('getSettings:', e)
    return defaultSettings()
  }
}

function defaultSettings(): Settings {
  return {
    email: 'hi@buildfox.space',
    github_url: 'https://github.com',
    linkedin_url: 'https://linkedin.com',
    twitter_url: 'https://twitter.com',
  }
}
