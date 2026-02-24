import { Metadata } from 'next'

import { Comedian } from '@/components/features/comedian/comedian'
import { getComedianBySlug } from '@/services/comedians/comedians'
import { createMetadata } from '@/utils/helpers/metadata'
import { withAuth } from '@/utils/supertokens/with-auth'

type Params = Promise<{ slug: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const comedian = await getComedianBySlug(params.slug)

    // prettier-ignore
    return createMetadata({
        title: `${comedian.name} ${comedian.surname}`,
        description: comedian.metaInfo?.description || `Биография, лучшие выступления и спешлы комика ${comedian.name} ${comedian.surname} на Камеди Портале.`,
        path: `/comedians/${comedian.slug}`,
        image: `/images/comedians/${comedian.slug}.jpg`,
        type: 'website',
        keywords: [
            `${comedian.name} ${comedian.surname}`,
            `${`${comedian.name} ${comedian.surname}`} стендап`,
            `${`${comedian.name} ${comedian.surname}`} спешл`,
            'стендап комик',
            'русский стендап',
            'биография комика',
            'юмор',
        ],
        authors: [{ name: `${comedian.name} ${comedian.surname}` }],
    })
}

export default async function ComedianPage(props: { params: Params }) {
    const params = await props.params

    return withAuth({
        render: ({ isAuth }) => <Comedian slug={params.slug} isAuth={isAuth} />,
    })
}
