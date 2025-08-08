import { Metadata } from 'next'

import { notFound } from 'next/navigation'

import { ContentMany } from '@/components/features/content-many/content-many'
import { categories } from '@/utils/dict/categories'
import { ContentType } from '@/utils/enums/common'
import { withAuth } from '@/utils/hoc/with-auth'

type Params = Promise<{ slug: ContentType }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const typeName = categories.find(category => category.type === params.slug)

    return {
        title: `${typeName?.label} - Comedy Portal`,
    }
}

export default async function ContentManyBySlugPage(props: { params: Params }) {
    const params = await props.params

    // Check if the slug is included in the ContentType enum
    if (!Object.values(ContentType).includes(params.slug.toLocaleLowerCase() as ContentType)) {
        notFound()
    }

    return withAuth({
        render: ({ isAuth }) => <ContentMany slug={params.slug} isAuth={isAuth} />,
    })
}
