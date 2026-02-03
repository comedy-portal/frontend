import Link from 'next/link'

import { Layout } from '@/components/features/layout/layout/layout'
import { categories } from '@/utils/dict/categories'

export default function ContentManyLayout(props: { children: React.ReactNode }) {
    return (
        <Layout
            title="Контент"
            info={
                <div className="sm:w-2/3">
                    У&nbsp;нас собрана большая коллекция смешного контента на&nbsp;любой вкус. Чтобы легче было выбрать,
                    мы разделили всё по&nbsp;типам&nbsp;&mdash;{' '}
                    <Link href="/blog/content-formats" className="text-blue-500 hover:text-blue-700">
                        узнайте
                    </Link>{' '}
                    чем они отличаются.
                </div>
            }
            size="lg"
            nav={[
                { label: 'Все', href: '/content' },
                ...categories.map(({ type, label }) => ({
                    label,
                    href: `/content/${type.toLowerCase()}`,
                })),
            ]}
            preserveQuery
        >
            {props.children}
        </Layout>
    )
}
