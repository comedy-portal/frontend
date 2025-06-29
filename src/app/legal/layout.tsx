import type { Metadata } from 'next/types'

import { Layout } from '@/components/features/layout/layout/layout'

export const metadata: Metadata = {
    robots: 'noindex, nofollow',
}

export default function LegalLayout(props: { children: React.ReactNode }) {
    return (
        <Layout
            title="Юридические документы"
            size="sm"
            nav={[
                {
                    label: 'Пользовательское соглашение',
                    href: '/legal/terms-of-use',
                },
                {
                    label: 'Политика конфиденциальности',
                    href: '/legal/privacy-policy',
                },
            ]}
        >
            {props.children}
        </Layout>
    )
}
