import { Metadata } from 'next'

import { Layout } from '@/components/features/layout/layout/layout'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Уведомления',
}

export default function NotificationsLayout(props: { children: React.ReactNode }) {
    return (
        <Layout title="Уведомления" size="sm">
            {props.children}
        </Layout>
    )
}
