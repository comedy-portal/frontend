import { Metadata } from 'next'

import { Group } from '@/components/features/group/group'
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

export default async function GroupPage(props: { params: Params }) {
    const params = await props.params
    const group = await getGroupsBySlug(params.slug)
    return <Group group={group} />
}
