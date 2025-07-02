import { Layout } from '@/components/features/layout/layout/layout'

export default function AboutLayout(props: { children: React.ReactNode }) {
    return (
        <Layout
            title="О проекте"
            size="sm"
            nav={[
                {
                    label: 'Кто мы?',
                    href: '/about',
                },
                {
                    label: 'Разбираемся в форматах',
                    href: '/about/formats',
                },
                {
                    label: 'Как мы оцениваем',
                    href: '/about/ratings',
                },
            ]}
        >
            {props.children}
        </Layout>
    )
}
