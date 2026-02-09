import { Metadata } from 'next'

import { AboutUs } from '@/components/features/about/about-us'

export const dynamic = 'force-static'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Кто мы?',
    description: 'Камеди Портал — Агрегатор лучших стендапов и популярных шоу с оценками, рецензиями и Вашей персональной историей просмотров..',
    keywords: [
        'Comedy Portal',
        'Камеди Портал',
        'комедийный портал',
        'стендап портал',
        'русскоязычный стендап',
        'комедийные шоу',
        'рейтинги стендапа',
        'оценки комедийных шоу',
        'рецензии на стендап',
        'отзывы о стендап концертах',
        'топ стендап концертов',
        'комедийное сообщество',
        'юмористический контент'
    ]
}

export default function AboutUsPage() {
    return <AboutUs />
}
