import { Layout } from '@/components/features/layout/layout/layout'

export default function ArticlesLayout(props: { children: React.ReactNode }) {
    return (
        <Layout title="Статьи" size="lg">
            {props.children}
        </Layout>
    )
}
