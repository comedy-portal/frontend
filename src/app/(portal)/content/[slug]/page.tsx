import { notFound } from 'next/navigation'

import { Content } from '@/components/features/content/content'
import { ContentType } from '@/types/content'

type Params = Promise<{ slug: ContentType }>

export default async function ContentPage(props: { params: Params }) {
    const params = await props.params

    // Check if the slug is included in the ContentType enum
    if (!Object.values(ContentType).includes(params.slug.toLocaleLowerCase() as ContentType)) {
        notFound()
    }

    return <Content slug={params.slug} />
}
