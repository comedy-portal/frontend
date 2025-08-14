import { notFound } from 'next/navigation'

import { UserSettings } from '@/components/features/user/user-settings/user-settings'
import { getUserData } from '@/services/user/user'
import { getUserByName } from '@/services/users/users'
import { withAuth } from '@/utils/supertokens/with-auth'

type Params = Promise<{ username: string }>

export default async function UserSettingsPage(props: { params: Params }) {
    const params = await props.params

    return withAuth({
        onUnauth: 'notFound',
        getAuthData: async () => {
            const requestedUser = await getUserByName(params.username)
            const activeUser = await getUserData()
            const isOwnProfile = activeUser.username.toLowerCase() === requestedUser.username.toLowerCase()

            if (!isOwnProfile) {
                notFound()
            }

            return { username: activeUser.username }
        },
        render: ({ data }) => {
            return <UserSettings username={data!.username} />
        },
    })
}
