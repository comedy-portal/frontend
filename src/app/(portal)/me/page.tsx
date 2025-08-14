import { redirect } from 'next/navigation'

import { getUserData } from '@/services/user/user'
import { withAuth } from '@/utils/supertokens/with-auth'

type Params = Promise<{ username: string }>

export default async function MeLayout({ params }: { params: Params }) {
    const { username: _username } = await params

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
