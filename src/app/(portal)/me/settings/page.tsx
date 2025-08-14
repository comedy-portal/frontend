<<<<<<< HEAD
import { MeSettings } from '@/components/features/me/settings/me-settings'
import { getUserData } from '@/services/user/user'
import { withAuth } from '@/utils/supertokens/with-auth'

export default async function MeSettingsPage() {
=======
import { MeSettings } from '@/components/features/me/me-settings'
import { getUserData } from '@/services/user/user'
import { withAuth } from '@/utils/supertokens/with-auth'

export default function MeSettingsPage() {
>>>>>>> feature/settings
    return withAuth({
        onUnauth: 'notFound',
        getAuthData: async () => {
            const activeUser = await getUserData()
            return { username: activeUser.username.toLowerCase() }
        },
        render: ({ data }) => <MeSettings username={data!.username} />,
    })
}
