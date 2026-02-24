import { Metadata } from 'next'

import { Notifications } from '@/components/features/me/notifications/notifications'
import { getUserData } from '@/services/user/user'
import { createMetadata } from '@/utils/helpers/metadata'
import { withAuth } from '@/utils/supertokens/with-auth'

export const metadata: Metadata = createMetadata({
    title: 'Уведомления',
    description: 'Смотрите последние уведомления о новых спешлах, шоу и активности на Камеди Портал.',
    path: '/me/subscriptions/notifications',
    type: 'website',
    noindex: true,
})

export default function NotificationsPage() {
    return withAuth({
        onUnauth: 'notFound',
        getAuthData: async () => {
            const userData = await getUserData()

            if (!userData) {
                return null
            }

            return { username: userData.username.toLowerCase() }
        },
        render: ({ data }) => <Notifications />,
    })
}
