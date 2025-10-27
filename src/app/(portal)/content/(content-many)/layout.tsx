import Link from 'next/link'

import { ContentFiltersButton } from '@/components/features/dialogs/filters/content-filters/content-filters-button'
import { Layout } from '@/components/features/layout/layout/layout'
import { categories } from '@/utils/dict/categories'
import { withAuth } from '@/utils/supertokens/with-auth'

export default function ContentManyLayout(props: { children: React.ReactNode }) {
    return withAuth({
        render: ({ isAuth }) => (
            <Layout
                title="Контент"
                info={
                    <div className="sm:w-2/3">
                        У&nbsp;нас собрана большая коллекция смешного контента на&nbsp;любой вкус. Чтобы легче было
                        выбрать, мы разделили всё по&nbsp;типам&nbsp;&mdash;{' '}
                        <Link href="/about/formats" className="text-blue-500 hover:text-blue-700" target="_blank">
                            узнайте
                        </Link>{' '}
                        чем они отличаются.
                    </div>
                }
                size="lg"
                nav={[
                    { label: 'Весь контент', href: '/content' },
                    ...categories.map(({ type, label }) => ({
                        label,
                        href: `/content/${type.toLowerCase()}`,
                    })),
                ]}
                filter={<ContentFiltersButton isAuth={isAuth} />}
                preserveQuery
            >
                {props.children}
            </Layout>
        ),
    })
}
