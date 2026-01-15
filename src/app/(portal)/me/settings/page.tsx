import { Settings } from '@/components/features/me/settings/settings'
import { getUserData } from '@/services/user/user'
import { withAuth } from '@/utils/supertokens/with-auth'

export default function SettingsPage() {
    return withAuth({
        onUnauth: 'notFound',
        getAuthData: async () => {
            const userData = await getUserData()

            if (!userData) {
                return null
            }

            return { username: userData.username.toLowerCase() }
        },
        render: ({ data }) => <Settings username={data!.username} />,
    })
}
