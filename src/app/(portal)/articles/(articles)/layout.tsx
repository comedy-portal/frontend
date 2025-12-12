import { Metadata } from 'next'

import { Layout } from '@/components/features/layout/layout/layout'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Статьи',
    description: 'Читайте статьи о стендапе, комиках и шоу на нашем портале.',
    openGraph: {
        title: 'Статьи',
        description: 'Читайте статьи о стендапе, комиках и шоу на нашем портале.',
    },
    twitter: {
        title: 'Статьи',
        description: 'Читайте статьи о стендапе, комиках и шоу на нашем портале.',
        card: 'summary_large_image',
    },
}

export default function ArticlesLayout(props: { children: React.ReactNode }) {
    return (
        <Layout title="Статьи" size="lg">
            {props.children}
        </Layout>
    )
}
