import type { Metadata } from 'next'

import { Layout } from '@/components/features/layout/layout/layout'
import { createMetadata } from '@/utils/helpers/metadata'

// prettier-ignore
export const metadata: Metadata = createMetadata({
    title: 'Кто мы?',
    description: 'Камеди Портал — ваш гид по русскоязычной комедии: рейтинги, рецензии и подборки стендапов и шоу для настоящих ценителей юмора.',
    path: '/about',
    keywords: [
        'Камеди Портал',
        'комедийный портал',
        'русскоязычная комедия',
        'стендап',
        'комедийные шоу',
        'рецензии на стендап',
        'рейтинги шоу',
        'юмор',
        'комедийное сообщество',
        'топ стендап концертов',
    ],
})

export default function AboutLayout(props: { children: React.ReactNode }) {
    return (
        <Layout title="О проекте" size="sm">
            {props.children}
        </Layout>
    )
}
