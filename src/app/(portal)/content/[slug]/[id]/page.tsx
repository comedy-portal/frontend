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
                'Агрегатор лучших стендапов и шоу - с оценками, рецензиями и Вашей персональной историей просмотров.',
            images: [
                {
                    url: content.contentImages[0]?.url || '',
                    width: 500,
                    height: 500,
                    type: 'image/jpeg',
                    alt: content.name,
                },
            ],
            url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/content/${content.type.toLowerCase()}/${content.id}`,
        },
        twitter: {
            title: comedians.map(comedian => comedian.name).join(', ') + ' ' + content.name,
            description:
                content.metaInfo?.description ||
                'Агрегатор лучших стендапов и шоу - с оценками, рецензиями и Вашей персональной историей просмотров.',
            card: 'summary_large_image',
        },
    }
}

export default async function ContentPage(props: { params: Params }) {
    const params = await props.params
    const content = await getContentById(params.id)

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: content.name,
        description: content.metaInfo?.description,
        thumbnailUrl: content.contentImages?.[0]?.url,
        uploadDate: content.createdAt,
        aggregateRating:
            content.rating.reviewsCount > 0
                ? {
                      '@type': 'AggregateRating',
                      ratingValue: content.rating.avgRating.toString(),
                      reviewCount: content.rating.reviewsCount.toString(),
                      bestRating: '10',
                      worstRating: '1',
                  }
                : undefined,
    }

    return withAuth({
        getAuthData: async () => {
            const userData = await getUserData()

            if (!userData) {
                return null
            }

            return { activeUserId: userData.id }
        },
        render: ({ isAuth, data }) => (
            <>
                {content.rating.reviewsCount > 0 && (
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                )}
                <Content contentId={params.id} activeUserId={data?.activeUserId ?? null} isAuth={isAuth} />
            </>
        ),
    })
}
