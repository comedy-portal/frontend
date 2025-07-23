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
        openGraph: {
            title: `${group.name} - Comedy Portal`,
            description: group.metaInfo?.description || 'Comedy Portal - Discover the best comedy content',
            images: [
                {
                    url: group.groupImages[0]?.url,
                    width: 500,
                    height: 500,
                    type: 'image/jpeg',
                    alt: `${group.name}`,
                },
            ],
            url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/comedians/groups/${group.slug}`,
        },
    }
}

export default async function GroupPage(props: { params: Params }) {
    const params = await props.params
    const group = await getGroupsBySlug(params.slug)
    return <Group group={group} />
}
