import { Metadata } from 'next'

import { AboutUs } from '@/components/features/about/about-us'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Кто мы?',
    description: 'Камеди Портал — сервис рейтингов и рецензий на русскоязычный стендап и комедийные шоу. Оценивайте, делитесь отзывами и открывайте лучший юмор.',
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
