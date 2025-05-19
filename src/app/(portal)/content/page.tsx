import { redirect } from 'next/navigation'

import { ContentType } from '@/types/content'

export default async function ContentPage() {
    redirect('/content/' + ContentType.SPECIAL)
}
