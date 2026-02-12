import { Layout } from '@/components/features/layout/layout/layout'

export default function VenuesLayout(props: { children: React.ReactNode }) {
    return (
        <Layout title="Площадки" size="lg">
            {props.children}
        </Layout>
    )
}
