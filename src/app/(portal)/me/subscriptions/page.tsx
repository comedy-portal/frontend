import { Subscriptions } from '@/components/features/me/subscriptions/subscriptions'
import { getUserData } from '@/services/user/user'
import { withAuth } from '@/utils/supertokens/with-auth'

export default function SubscriptionsPage() {
    return withAuth({
        onUnauth: 'notFound',
        getAuthData: async () => {
            const activeUser = await getUserData()
            return { username: activeUser.username.toLowerCase() }
        },
        render: ({ data }) => <Subscriptions />,
    })
}
