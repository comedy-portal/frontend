import { redirect } from 'next/navigation'

import { getUserData } from '@/services/user/user'
import { withAuth } from '@/utils/supertokens/with-auth'

export default function MePage() {
    return withAuth({
        onUnauth: 'notFound',
        getAuthData: async () => {
            const activeUser = await getUserData()
            return { username: activeUser.username.toLowerCase() }
        },
        render: ({ data }) => {
            return redirect(`/users/${data!.username}`)
        },
    })
}
