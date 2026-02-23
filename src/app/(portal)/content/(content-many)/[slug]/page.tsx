import { Metadata } from 'next'

import { redirect } from 'next/navigation'

import { ContentMany } from '@/components/features/content-many/content-many'
import { getSettings } from '@/services/settings/settings'
import { contentTypesDict } from '@/utils/dict/content-types'
import { ContentType } from '@/utils/enums/common'
import { createMetadata } from '@/utils/helpers/metadata'
import { withAuth } from '@/utils/supertokens/with-auth'

type Params = Promise<{ slug: ContentType }>

// prettier-ignore
const descriptions: Record<string, string> = {
    [ContentType.SPECIAL]: 'Лучшие стендап-спешлы от известных комиков. Смотрите сольные выступления и открывайте новые имена в мире комедии.',
    [ContentType.STANDUP]: 'Комедийные стендап-шоу с несколькими выступающими. Разные стили, свежие шутки и живые реакции зала — весь дух настоящего стендапа.',
    [ContentType.BLOG]: 'Комики делятся мыслями, рассказывают закулисные истории и обсуждают всё, что вызывает смех. Узнайте комедию изнутри.',
    [ContentType.DISCUSSION]: 'Споры, разговоры и смешные дебаты о жизни, культуре и юморе. Когда комики начинают обсуждать — без смеха не обойдётся.',
    [ContentType.IMPROV_SHOW]: 'Полный хаос и весёлые импровизации! Смотрите, как комики шутят на ходу, создавая смешные сцены прямо на глазах у зрителей.',
    [ContentType.PODCAST]: 'Слушайте комедийные подкасты — разговоры, шутки и интересные истории от любимых комиков в неформальной обстановке.',
    [ContentType.ROAST_BATTLE]: 'Смелый юмор и жаркие шутки! Комики подкалывают друг друга без пощады, превращая сарказм в настоящее искусство.',
    [ContentType.SERIES]: 'Комедийные сериалы и шоу — от классики до новых хитов. Наслаждайтесь историями, которые поднимают настроение.',
    [ContentType.SKETCH]: 'Короткие сценки, абсурдные ситуации и мгновенный юмор. Смотрите подборку смешных скетчей от лучших комедийных команд.',
    [ContentType.TALK_SHOW]: 'Юмор, разговоры и неожиданные гости! Самые интересные комедийные ток-шоу с известными личностями и остроумными ведущими.',
    [ContentType.TEAM_SHOW]: 'Командные шоу, где выступают несколько комиков. Смотрите весёлые и неожиданные выступления, полные юмора и импровизации.',
}

// prettier-ignore
export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const typeName = contentTypesDict.find(contentType => contentType.slug === params.slug)
    const title = typeName?.label ? typeName.label : 'Камеди Портал'
    const description = descriptions[params.slug] || 'Лучшие стендапы и популярные шоу с оценками, рецензиями и Вашей персональной историей просмотров.'

    return createMetadata({
        title,
        description,
        path: `/content/${params.slug}`,
        type: 'website',
    })
}

export default async function ContentManyBySlugPage(props: { params: Params }) {
    const params = await props.params
    const settings = await getSettings()

    // Check if the slug is included in the ContentType enum
    if (!Object.values(ContentType).includes(params.slug.toLocaleLowerCase() as ContentType)) {
        redirect('/404')
    }

    return withAuth({
        render: ({ isAuth }) => <ContentMany currentYear={settings.currentYear} slug={params.slug} isAuth={isAuth} />,
    })
}
