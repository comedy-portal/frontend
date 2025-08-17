import { ContentFiltersButton } from '@/components/features/dialogs/filters/content-filters/content-filters-button'
import { Layout } from '@/components/features/layout/layout/layout'
import { categories } from '@/utils/dict/categories'

export default function ContentManyLayout(props: { children: React.ReactNode }) {
    return (
        <Layout
            title="Контент"
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
