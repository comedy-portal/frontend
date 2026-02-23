import { Metadata } from 'next'

import { Subscriptions } from '@/components/features/me/subscriptions/subscriptions'
import { getUserData } from '@/services/user/user'
import { createMetadata } from '@/utils/helpers/metadata'
import { withAuth } from '@/utils/supertokens/with-auth'

export const metadata: Metadata = createMetadata({
    title: 'Подписки',
    description: 'Управляйте подписками на любимых комиков и группы на Камеди Портал.',
    path: '/me/subscriptions',
    type: 'website',
    noindex: true,
})

export default function SubscriptionsPage() {
    return withAuth({
        onUnauth: 'notFound',
        getAuthData: async () => {
            const userData = await getUserData()

            if (!userData) {
                return null
            }

            return { username: userData.username.toLowerCase() }
        },
        render: ({ data }) => <Subscriptions />,
    })
}
