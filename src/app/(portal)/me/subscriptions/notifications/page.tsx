import { Notifications } from '@/components/features/me/notifications/notifications'
import { getUserData } from '@/services/user/user'
import { withAuth } from '@/utils/supertokens/with-auth'

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
