import { Layout } from '@/components/features/layout/layout/layout'
import { categories } from '@/utils/dict/categories'

export default async function ContentManyLayout(props: { children: React.ReactNode }) {
    return (
        <Layout
            title="Контент"
            size="lg"
            nav={categories.map(({ type, label }) => ({
                label,
                href: `/content/${type.toLowerCase()}`,
            }))}
        >
            {props.children}
        </Layout>
    )
}
