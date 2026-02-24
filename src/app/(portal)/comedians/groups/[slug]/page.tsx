import { Metadata } from 'next'

import { Group } from '@/components/features/group/group'
import { getGroupBySlug } from '@/services/groups/groups'
import { createMetadata } from '@/utils/helpers/metadata'
import { withAuth } from '@/utils/supertokens/with-auth'

type Params = Promise<{ slug: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const group = await getGroupBySlug(params.slug)

    // prettier-ignore
    return createMetadata({
        title: group.name,
        description: group.metaInfo?.description || `Комедийная группа ${group.name}. Участники, шоу, лучшие выступления и рейтинги на Камеди Портале.`,
        path: `/comedians/groups/${group.slug}`,
        image: group.groupImages[0]?.url || '/images/og-default.jpg',
        type: 'website',
        keywords: [
            group.name,
            `${group.name} комики`,
            `${group.name} стендап`,
            'группа комиков',
            'комедийная команда',
            'стендап коллектив',
            'юмор',
        ],
        authors: [{ name: group.name }],
    })
}

export default async function GroupPage(props: { params: Params }) {
    const params = await props.params

    return withAuth({
        render: ({ isAuth }) => <Group slug={params.slug} isAuth={isAuth} />,
    })
}
