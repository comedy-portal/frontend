import { Layout } from '@/components/features/layout/layout/layout'

export default function AboutLayout(props: { children: React.ReactNode }) {
    return (
        <Layout title="О проекте" size="sm">
            {props.children}
        </Layout>
    )
}
