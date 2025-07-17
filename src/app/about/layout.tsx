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
                    label: 'Вопросы и ответы',
                    href: '/about/faq',
                },
                {
                    label: 'Об альфа-версии',
                    href: '/about/alpha',
                },
            ]}
        >
            {props.children}
        </Layout>
    )
}
