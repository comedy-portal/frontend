import Link from 'next/link'

import { Layout } from '@/components/features/layout/layout/layout'
import { contentTypesDict } from '@/utils/dict/content-types'

export default function ContentManyLayout(props: { children: React.ReactNode }) {
    return (
        <Layout
            title="Контент"
            size="lg"
            nav={[
                { label: 'Все', href: '/content' },
                ...contentTypesDict.map(({ slug, label }) => ({
                    label,
                    href: `/content/${slug.toLowerCase()}`,
                })),
            ]}
            preserveQuery
        >
            {props.children}
        </Layout>
    )
}
