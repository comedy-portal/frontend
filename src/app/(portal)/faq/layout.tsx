import type { Metadata } from 'next'

import { Layout } from '@/components/features/layout/layout/layout'
import { createMetadata } from '@/utils/helpers/metadata'

// prettier-ignore
export const metadata: Metadata = createMetadata({
    title: 'Вопросы и ответы',
    description: 'Ответы на частые вопросы о Камеди Портал: как пользоваться сайтом, ставить оценки, предлагать контент и устанавливать сайт на устройство.',
    path: '/faq',
    keywords: [
        'Камеди Портал',
        'FAQ Камеди Портал',
        'вопросы и ответы стендап',
        'комедийный портал',
        'рейтинги стендап концертов',
        'оценки пользователей',
        'установить Камеди Портал',
        'PWA комедийный сайт',
        'предложить комедийный контент',
    ],
    type: 'website',
})

export default function FaqLayout(props: { children: React.ReactNode }) {
    return (
        <Layout title="Вопросы и ответы" size="sm">
            {props.children}
        </Layout>
    )
}
