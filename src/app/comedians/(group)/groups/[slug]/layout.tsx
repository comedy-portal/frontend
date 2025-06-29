import type { Metadata } from 'next/types'

import { Layout } from '@/components/features/layout/layout/layout'
import { getGroupsBySlug } from '@/services/groups/groups'

export const metadata: Metadata = {
    robots: 'noindex, nofollow',
}

type Params = Promise<{ slug: string }>

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
