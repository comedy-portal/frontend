import { Layout } from '@/components/features/layout/layout/layout'

export default function WelcomeLayout(props: { children: React.ReactNode }) {
    return (
        <Layout title="Добро пожаловать в Comedy Portal!" size="sm">
            {props.children}
        </Layout>
    )
}
