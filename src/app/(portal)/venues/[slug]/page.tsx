import { Metadata } from 'next'

import { Comedian } from '@/components/features/comedian/comedian'
import { Venue } from '@/components/features/venue/venue'
import { getComedianBySlug } from '@/services/comedians/comedians'
import { withAuth } from '@/utils/supertokens/with-auth'

type Params = Promise<{ slug: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    return {
        // title: '',
        // description: "",
        // openGraph: {
        //     type: 'website',
        //     title: "",
        //     description: ""
        //     images: [
        //         {
        //             url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/comedians/${comedian.slug}.jpg`,
        //             width: 500,
        //             height: 500,
        //             type: 'image/jpeg',
        //             alt: `${comedian.name} ${comedian.surname}`,
        //         },
        //     ],
        //     url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/comedians/${comedian.slug}`,
        // },
        // twitter: {
        //     title: `${comedian.name} ${comedian.surname}`,
        //     description:
        //         comedian.metaInfo?.description ||
        //         'Агрегатор лучших стендапов и шоу - с оценками, рецензиями и Вашей персональной историей просмотров.',
        //     card: 'summary_large_image',
        // },
    }
}

export default async function VenuePage(props: { params: Params }) {
    const params = await props.params
    return <Venue slug={params.slug} />
}
