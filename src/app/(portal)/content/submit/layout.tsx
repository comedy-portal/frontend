import { Metadata } from 'next'

import { Layout } from '@/components/features/layout/layout/layout'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Предложить контент - Comedy Portal',
}

export default function ContentSubmitLayout(props: { children: React.ReactNode }) {
    return (
        <Layout title="Предложить контент" size="sm">
            {props.children}
        </Layout>
    )
}
