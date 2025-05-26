import { notFound } from 'next/navigation'

import { Comedian } from '@/components/features/comedian/comedian'
import { getComedianBySlug } from '@/services/comedians'

type Params = Promise<{ slug: string }>

export default async function ComedianPage(props: { params: Params }) {
    const params = await props.params
    const comedian = await getComedianBySlug(params.slug)

    if (!comedian) {
        notFound()
    }

    return <Comedian name={comedian.name} surname={comedian.surname} imageUrl={comedian.comedianImages[0]?.url} />
}
