import { notFound } from 'next/navigation'

import { ContentMany } from '@/components/features/content-many/content-many'
import { ContentType } from '@/utils/enums/common'

type Params = Promise<{ slug: ContentType }>

export default async function ContentManyPage(props: { params: Params }) {
    const params = await props.params

    // Check if the slug is included in the ContentType enum
    if (!Object.values(ContentType).includes(params.slug.toLocaleLowerCase() as ContentType)) {
        notFound()
    }

    return <ContentMany slug={params.slug} />
}
