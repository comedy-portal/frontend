import { Metadata } from 'next'

import { redirect } from 'next/navigation'

import { ContentMany } from '@/components/features/content-many/content-many'
import { contentTypesDict } from '@/utils/dict/content-types'
import { ContentType } from '@/utils/enums/common'
import { withAuth } from '@/utils/supertokens/with-auth'

type Params = Promise<{ slug: ContentType }>

// prettier-ignore
export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const typeName = contentTypesDict.find(contentType => contentType.slug === params.slug)

    const descriptions: Record<string, string> = {
        [ContentType.SPECIAL]: 'Лучшие стендап-спешлы от известных комиков. Смотри сольные выступления и открывай новые имена в мире комедии.',
        [ContentType.STANDUP]: 'Комедийные стендап-шоу с несколькими выступающими. Разные стили, свежие шутки и живые реакции зала — весь дух настоящего стендапа.',
        [ContentType.BLOG]: 'Комики делятся мыслями, рассказывают закулисные истории и обсуждают всё, что вызывает смех. Узнай комедию изнутри.',
        [ContentType.DISCUSSION]: 'Споры, разговоры и смешные дебаты о жизни, культуре и юморе. Когда комики начинают обсуждать — без смеха не обойдётся.',
        [ContentType.IMPROV_SHOW]: 'Полный хаос и весёлые импровизации! Смотри, как комики шутят на ходу, создавая смешные сцены прямо на глазах у зрителей.',
        [ContentType.PODCAST]: 'Слушай комедийные подкасты — разговоры, шутки и интересные истории от любимых комиков в неформальной обстановке.',
        [ContentType.ROAST_BATTLE]: 'Смелый юмор и жаркие шутки! Комики подкалывают друг друга без пощады, превращая сарказм в настоящее искусство.',
        [ContentType.SERIES]: 'Комедийные сериалы и шоу — от классики до новых хитов. Наслаждайся историями, которые поднимают настроение.',
        [ContentType.SKETCH]: 'Короткие сценки, абсурдные ситуации и мгновенный юмор. Смотри подборку смешных скетчей от лучших комедийных команд.',
        [ContentType.TALK_SHOW]: 'Юмор, разговоры и неожиданные гости! Самые интересные комедийные ток-шоу с известными личностями и остроумными ведущими.',
        [ContentType.TEAM_SHOW]: 'Командные шоу, где выступают несколько комиков. Смотри весёлые и неожиданные выступления, полные юмора и импровизации.',
    }

    const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN as string
    const title = typeName?.label ? typeName.label : 'Камеди Портал'
    const description = descriptions[params.slug] || 'Агрегатор лучших стендапов и популярных шоу с оценками, рецензиями и Вашей персональной историей просмотров.'
    const url = `/${params.slug}`

    return {
        metadataBase: new URL(baseUrl),
        alternates: {
            canonical: url,
        },
        title,
        description,
        appleWebApp: {
            title,
        },
        openGraph: {
            title,
            description,
            type: 'website',
            locale: 'ru_RU',
            url,
            siteName: 'Камеди Портал',
        },
        twitter: {
            title,
            description,
            card: 'summary_large_image',
        },
    }
}

export default async function ContentManyBySlugPage(props: { params: Params }) {
    const params = await props.params

    // Check if the slug is included in the ContentType enum
    if (!Object.values(ContentType).includes(params.slug.toLocaleLowerCase() as ContentType)) {
        redirect('/404')
    }

    return withAuth({
        render: ({ isAuth }) => <ContentMany slug={params.slug} isAuth={isAuth} />,
    })
}
