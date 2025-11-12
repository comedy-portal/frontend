import { Metadata } from 'next'

import { Content } from '@/components/features/content/content'
import { getContentById } from '@/services/content/content'
import { getUserData } from '@/services/user/user'
import { getAuthorsDisplayNamesForContent } from '@/utils/helpers/common'
import { withAuth } from '@/utils/supertokens/with-auth'

type Params = Promise<{ id: number }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const content = await getContentById(params.id)
    const comedians = getAuthorsDisplayNamesForContent(content)

    return {
        title: comedians.map(comedian => comedian.name).join(', ') + ' ' + content.name,
        description: content.metaInfo?.description,
        openGraph: {
            title: comedians.map(comedian => comedian.name).join(', ') + ' ' + content.name,
            description:
                content.metaInfo?.description ||
                'Агрегатор лучших стендапов и шоу - с оценками, рецензиями и твоей персональной историей просмотров.',
            images: [
                {
                    url: content.contentImages[0].url,
                    width: 500,
                    height: 500,
                    type: 'image/jpeg',
                    alt: content.name,
                },
            ],
            url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/content/${content.type.toLowerCase()}/${content.id}`,
        },
    }
}

export default async function ContentPage(props: { params: Params }) {
    const params = await props.params

    return withAuth({
        getAuthData: async () => {
            const activeUser = await getUserData()
            return { activeUserId: activeUser.id }
        },
        render: ({ isAuth, data }) => (
            <Content contentId={params.id} activeUserId={data?.activeUserId ?? null} isAuth={isAuth} />
        ),
    })
}
