import { Metadata } from 'next'

import { Layout } from '@/components/features/layout/layout/layout'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Блог',
    description: 'Добро пожаловать в наш блог! Здесь вы найдете последние новости, статьи и обновления по различным темам. Присоединяйтесь к нам, чтобы быть в курсе всех событий и получать полезную информацию.',
    openGraph: {
        title: 'Блог',
        description: 'Добро пожаловать в наш блог! Здесь вы найдете последние новости, статьи и обновления по различным темам. Присоединяйтесь к нам, чтобы быть в курсе всех событий и получать полезную информацию.',
    },
    twitter: {
        title: 'Блог',
        description: 'Добро пожаловать в наш блог! Здесь вы найдете последние новости, статьи и обновления по различным темам. Присоединяйтесь к нам, чтобы быть в курсе всех событий и получать полезную информацию.',
        card: 'summary_large_image',
    },
}

export default function BlogLayout(props: { children: React.ReactNode }) {
    return (
        <Layout title="Блог" size="lg">
            {props.children}
        </Layout>
    )
}
