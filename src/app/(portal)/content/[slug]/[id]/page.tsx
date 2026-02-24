import { Metadata } from 'next'

import { ContentSchema } from '@/components/features/common/seo/content-schema'
import { Content } from '@/components/features/content/content'
import { getContentById } from '@/services/content/content'
import { getUserData } from '@/services/user/user'
import { getAuthorsDisplayNamesForContent } from '@/utils/helpers/common'
import { createMetadata } from '@/utils/helpers/metadata'
import { withAuth } from '@/utils/supertokens/with-auth'

type Params = Promise<{ id: number }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const content = await getContentById(params.id)
    const comedians = getAuthorsDisplayNamesForContent(content)

    return createMetadata({
        title: content.name + ' — ' + comedians.map(comedian => comedian.name).join(', '),
        description:
            content.metaInfo?.description ||
            'Лучшие стендапы и популярные шоу с оценками, рецензиями и Вашей персональной историей просмотров.',
        path: `/content/${content.type.toLowerCase()}/${content.id}`,
        image: content.contentImages[0]?.url || '/images/og-default.jpg',
        type: 'article',
        keywords: [
            ...comedians.map(comedian => comedian.name),
            content.name,
            'стендап',
            'комедия',
            'русский стендап',
            content.type.toLowerCase(),
        ],
        authors: comedians.map(comedian => ({
            name: comedian.name,
            url: comedian.url,
        })),
    })
}

export default async function ContentPage(props: { params: Params }) {
    const params = await props.params
    const content = await getContentById(params.id)

    return (
        <>
            <ContentSchema content={content} />

            {withAuth({
                getAuthData: async () => {
                    const userData = await getUserData()
                    return userData ? { activeUserId: userData.id } : null
                },
                render: ({ isAuth, data }) => (
                    <Content contentId={params.id} activeUserId={data?.activeUserId ?? null} isAuth={isAuth} />
                ),
            })}
        </>
    )
}
