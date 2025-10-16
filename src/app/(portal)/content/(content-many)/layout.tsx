import Link from 'next/link'

import { ContentFiltersButton } from '@/components/features/dialogs/filters/content-filters/content-filters-button'
import { Layout } from '@/components/features/layout/layout/layout'
import { categories } from '@/utils/dict/categories'

export default function ContentManyLayout(props: { children: React.ReactNode }) {
    return (
        <Layout
            title="Контент"
            info={
                <span>
                    На Камеди Портал мы собрали огромную коллекцию смешного контента на любой вкус. Чтобы Вам было проще
                    ориентироваться, мы разделили всё по типам.{' '}
                    <Link href="/about/formats" className="text-blue-500 hover:text-blue-700">
                        Узнайте
                    </Link>
                    , чем они отличаются, и найдите то, что Вам по вкусу!
                </span>
            }
            size="lg"
            nav={[
                { label: 'Весь контент', href: '/content' },
                ...categories.map(({ type, label }) => ({
                    label,
                    href: `/content/${type.toLowerCase()}`,
                })),
            ]}
            filter={<ContentFiltersButton />}
            preserveQuery
        >
            {props.children}
        </Layout>
    )
}
