import { Layout } from '@/components/features/layout/layout/layout'

export default function ComediansLayout(props: { children: React.ReactNode }) {
    return (
        <Layout
            title="Авторы"
            size="lg"
            nav={[
                {
                    label: 'Комики',
                    href: '/comedians',
                },
                {
                    label: 'Группы',
                    href: '/comedians/groups',
                },
            ]}
        >
            {props.children}
        </Layout>
    )
}
