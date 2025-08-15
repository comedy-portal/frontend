import { Metadata } from 'next'

import { Layout } from '@/components/features/layout/layout/layout'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Настройки - Comedy Portal',
}

export default function MeLayout(props: { children: React.ReactNode }) {
    return (
        <Layout title="Настройки" size="sm">
            {props.children}
        </Layout>
    )
}
