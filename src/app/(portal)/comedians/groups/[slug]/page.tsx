import { Metadata } from 'next'

import { Group } from '@/components/features/group/group'
import { getGroupsBySlug } from '@/services/groups/groups'
import { withAuth } from '@/utils/supertokens/with-auth'

type Params = Promise<{ slug: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const group = await getGroupsBySlug(params.slug)

    return {
        title: group.name,
        description: group.metaInfo?.description,
        openGraph: {
            title: group.name,
            description:
                group.metaInfo?.description ||
                'Агрегатор лучших стендапов и шоу - с оценками, рецензиями и Вашей персональной историей просмотров.',
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
        twitter: {
            title: group.name,
            description:
                group.metaInfo?.description ||
                'Агрегатор лучших стендапов и шоу - с оценками, рецензиями и Вашей персональной историей просмотров.',
            card: 'summary_large_image',
        },
    }
}

export default async function GroupPage(props: { params: Params }) {
    const params = await props.params

    return withAuth({
        render: ({ isAuth }) => <Group slug={params.slug} isAuth={isAuth} />,
    })
}
