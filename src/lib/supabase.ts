import { createClient } from '@supabase/supabase-js'


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? ""

const supabase = createClient(supabaseUrl, supabaseKey)

export const getImageUrl = (name: string) => {
    const { data } = supabase
  .storage
  .from('blogs')
  .getPublicUrl('folder/articles/${name}')

  return data.publicUrl

}