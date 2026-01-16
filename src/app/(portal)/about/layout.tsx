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
                    label: 'Вопросы и ответы',
                    href: '/about/faq',
                },
            ]}
        >
            {props.children}
        </Layout>
    )
}
