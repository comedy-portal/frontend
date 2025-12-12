import { Metadata } from 'next'

import { Layout } from '@/components/features/layout/layout/layout'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Тирлист комиков по версии подписчиков Давида Квахаджелидзе',
    description:'Подписчики комика Давида Квахаджелидзе составили собственный tier list комиков в его Telegram-канале. Comedy portal публикует результаты опросов.',
    keywords: ['тирлист комиков', 'tier list комиков', 'Давид Квахаджелидзе опрос', 'тирлист подписчиков', 'рейтинг комиков 2025', 'юмористы тирлист', 'телеграм опрос комики', 'субъективный рейтинг комиков', 'Давид Квахаджелидзе tier list', 'комики голосование подписчиков']
}

export default function AboutLayout(props: { children: React.ReactNode }) {
    return (
        <Layout title="Тирлист комиков по версии подписчиков Давида Квахаджелидзе" size="lg">
            {props.children}
        </Layout>
    )
}
