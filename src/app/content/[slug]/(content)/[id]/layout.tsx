import { Metadata } from 'next'

import { Layout } from '@/components/features/layout/layout/layout'
import { getContentById } from '@/services/content/content'

type Params = Promise<{ id: number }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const content = await getContentById(params.id)

    return {
        title: `${content.name} - Comedy Portal`,
        description: content.metaInfo?.description,
    }
}

export default async function ContentLayout(props: { children: React.ReactNode; params: Params }) {
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
                    label: `Рецензии (${content._count?.reviews || 0})`,
                    href: `/content/${content.type.toLowerCase()}/${content.id}/reviews`,
                    exact: true,
                },
            ]}
        >
            {props.children}
        </Layout>
    )
}
