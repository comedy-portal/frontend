import { Layout } from '@/components/features/layout/layout/layout'

export default function LegalLayout(props: { children: React.ReactNode }) {
    return (
        <Layout
            title="Юридические документы"
            nav={[
                {
                    label: 'Пользовательское соглашение',
                    href: '/legal/terms-of-use',
                },
                {
                    label: 'Политика ПДн',
                    href: '/legal/privacy-policy',
                },
                {
                    label: 'Согласие на обработку ПДн',
                    href: '/legal/personal-data-consent',
                },
                {
                    label: 'Согласие на рассылки',
                    href: '/legal/newsletter-consent',
                },
                {
                    label: 'Cookies',
                    href: '/legal/cookie-policy',
                },
            ]}
        >
            {props.children}
        </Layout>
    )
}
