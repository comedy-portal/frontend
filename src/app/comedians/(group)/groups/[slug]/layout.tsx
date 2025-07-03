import { Metadata } from 'next'

import { Layout } from '@/components/features/layout/layout/layout'
import { getGroupsBySlug } from '@/services/groups/groups'

type Params = Promise<{ slug: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const group = await getGroupsBySlug(params.slug)

    return {
        title: `${group.name} - Comedy Portal`,
        description: group.metaInfo?.description,
    }
}

export default async function ComediansGroupLayout(props: { children: React.ReactNode; params: Params }) {
    const params = await props.params
    const group = await getGroupsBySlug(params.slug)

    return (
        <Layout
            title={group.name}
            size="sm"
            nav={[
                {
                    label: 'Описание',
                    href: `/comedians/groups/${group.slug}`,
                },
                {
                    label: `Комики (${group.comedians.length})`,
                    href: `/comedians/groups/${group.slug}/composition`,
                },
                {
                    label: `Контент (${group.content.length})`,
                    href: `/comedians/groups/${group.slug}/content`,
                },
            ]}
        >
            {props.children}
        </Layout>
    )
}
