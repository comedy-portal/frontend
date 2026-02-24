import type { Metadata } from 'next'

import { Layout } from '@/components/features/layout/layout/layout'
import { createMetadata } from '@/utils/helpers/metadata'

// prettier-ignore
export const metadata: Metadata = createMetadata({
    title: 'Блог',
    description: 'Последние обновления Камеди Портал, новости и улучшения сайта. Следите за новыми функциями, событиями и контентом нашего портала.',
    path: '/blog',
    keywords: [
        'Камеди Портал',
        'блог',
        'обновления сайта',
        'новости портала',
        'стендап',
        'комедийный портал',
        'функции сайта',
        'новый контент',
        'улучшения',
    ],
    type: 'website',
})

export default function BlogLayout(props: { children: React.ReactNode }) {
    return (
        <Layout title="Блог" size="lg">
            {props.children}
        </Layout>
    )
}
