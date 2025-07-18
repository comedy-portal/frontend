import { Layout } from '@/components/features/layout/layout/layout'

export default function Top50SpecialLayout(props: { children: React.ReactNode }) {
    return (
        <Layout
            title="50 лучших выступлений"
            size="sm"
            nav={[
                {
                    label: 'За 2025 год',
                    href: '/top-50-special/2025',
                },
                {
                    label: 'За все время',
                    href: '/top-50-special',
                },
            ]}
        >
            {props.children}
        </Layout>
    )
}
