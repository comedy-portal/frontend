import { Metadata } from 'next'

import { Comedian } from '@/components/features/comedian/comedian'
import { getComedianBySlug } from '@/services/comedians/comedians'
import { withAuth } from '@/utils/supertokens/with-auth'

type Params = Promise<{ slug: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const comedian = await getComedianBySlug(params.slug)

    return {
        title: `${comedian.name} ${comedian.surname}`,
        description: comedian.metaInfo?.description,
        openGraph: {
            title: `${comedian.name} ${comedian.surname}`,
            description:
                comedian.metaInfo?.description ||
                'Агрегатор лучших стендапов и шоу - с оценками, рецензиями и твоей персональной историей просмотров.',
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/comedians/${comedian.slug}.jpg`,
                    width: 500,
                    height: 500,
                    type: 'image/jpeg',
                    alt: `${comedian.name} ${comedian.surname}`,
                },
            ],
            url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/comedians/${comedian.slug}`,
        },
        twitter: {
            title: `${comedian.name} ${comedian.surname}`,
            description:
                comedian.metaInfo?.description ||
                'Агрегатор лучших стендапов и шоу - с оценками, рецензиями и твоей персональной историей просмотров.',
            card: 'summary_large_image',
        },
    }
}

export default async function ComedianPage(props: { params: Params }) {
    const params = await props.params

    return withAuth({
        render: ({ isAuth }) => <Comedian slug={params.slug} isAuth={isAuth} />,
    })
}
