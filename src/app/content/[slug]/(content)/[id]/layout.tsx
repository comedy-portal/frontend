import { ReactNode } from 'react'

import type { Metadata } from 'next/types'

import { Layout } from '@/components/features/layout/layout/layout'
import { getContentById } from '@/services/content/content'

export const metadata: Metadata = {
    robots: 'noindex, nofollow',
}

type Params = Promise<{ id: number }>

export default async function ContentLayout(props: { children: ReactNode; params: Params }) {
    const params = await props.params
    const content = await getContentById(params.id)

    return (
        <Layout
            title={content.name}
            size="sm"
            nav={[
                {
                    label: 'Описание',
                    href: `/content/${content.type.toLowerCase()}/${content.id}`,
                    exact: true,
                },
                {
                    label: `Рецензии (${content.rating.reviewsCount})`,
                    href: `/content/${content.type.toLowerCase()}/${content.id}/reviews`,
                    exact: true,
                },
            ]}
            backURL={`/content/${content.type.toLowerCase()}`}
        >
            {props.children}
        </Layout>
    )
}
