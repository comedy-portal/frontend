import { notFound } from 'next/navigation'

import { Content } from '@/components/features/content/content'
import { getContentById } from '@/services/content'

type Params = Promise<{ id: number }>

export default async function ContentPage(props: { params: Params }) {
    const params = await props.params
    const content = await getContentById(params.id)

    if (!content) {
        notFound()
    }

    return <Content name={content.name} imageUrl={content.contentImages[0].url} type={content.type} />
}
