'use server'

import { createClient } from './supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createProject(formData: FormData) {
  const supabase = await createClient()

  const tagsRaw = (formData.get('tags') as string) ?? ''
  const tags = tagsRaw.split(',').map(t => t.trim()).filter(Boolean)

  const { error } = await supabase.from('projects').insert({
    number: formData.get('number') as string,
    name: formData.get('name') as string,
    description: formData.get('description') as string,
    status: formData.get('status') as string,
    url: (formData.get('url') as string) || null,
    tags,
    visible: formData.get('visible') === 'true',
    display_order: Number(formData.get('display_order') ?? 99),
  })

  if (error) throw error
  revalidatePath('/')
  revalidatePath('/admin/projects')
  redirect('/admin/projects')
}

export async function updateProject(id: string, formData: FormData) {
  const supabase = await createClient()

  const tagsRaw = (formData.get('tags') as string) ?? ''
  const tags = tagsRaw.split(',').map(t => t.trim()).filter(Boolean)

  const { error } = await supabase.from('projects').update({
    number: formData.get('number') as string,
    name: formData.get('name') as string,
    description: formData.get('description') as string,
    status: formData.get('status') as string,
    url: (formData.get('url') as string) || null,
    tags,
    visible: formData.get('visible') === 'true',
    display_order: Number(formData.get('display_order') ?? 99),
  }).eq('id', id)

  if (error) throw error
  revalidatePath('/')
  revalidatePath('/admin/projects')
  redirect('/admin/projects')
}

export async function deleteProject(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('projects').delete().eq('id', id)
  if (error) throw error
  revalidatePath('/')
  revalidatePath('/admin/projects')
}

export async function toggleProjectVisibility(id: string, visible: boolean) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('projects')
    .update({ visible })
    .eq('id', id)
  if (error) throw error
  revalidatePath('/')
  revalidatePath('/admin/projects')
}

export async function updateSettings(settings: Record<string, string>) {
  const supabase = await createClient()

  const upserts = Object.entries(settings).map(([key, value]) => ({ key, value }))
  const { error } = await supabase.from('settings').upsert(upserts, { onConflict: 'key' })
  if (error) throw error
  revalidatePath('/')
}

export async function signIn(email: string) {
  if (!process.env.ADMIN_EMAIL || email !== process.env.ADMIN_EMAIL) {
    throw new Error('Unauthorized')
  }
  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/auth/callback`,
    },
  })
  if (error) throw error
}

export async function signInWithPassword(email: string, password: string) {
  if (!process.env.ADMIN_EMAIL || email !== process.env.ADMIN_EMAIL) {
    throw new Error('Unauthorized')
  }
  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw new Error('Invalid email or password')
  redirect('/admin')
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/admin/login')
}
