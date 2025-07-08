import { Metadata } from 'next'

import { Comedian } from '@/components/features/comedian/comedian'
import { getComedianBySlug } from '@/services/comedians/comedians'

type Params = Promise<{ slug: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const comedian = await getComedianBySlug(params.slug)

    return {
        title: `${comedian.name} ${comedian.surname} - Comedy Portal`,
        description: comedian.metaInfo?.description,
    }
}

export default async function ComedianPage(props: { params: Params }) {
    const params = await props.params
    const comedian = await getComedianBySlug(params.slug)
    return <Comedian comedian={comedian} />
}
