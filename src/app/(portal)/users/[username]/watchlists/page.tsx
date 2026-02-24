import { Metadata } from 'next'

import { UserWatchlists } from '@/components/features/user/user-watchlists/user-watchlists'
import { getSettings } from '@/services/settings/settings'
import { withAuth } from '@/utils/supertokens/with-auth'

type Params = Promise<{ username: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params

    return {
        title: `Избранное пользователя ${params.username}`,
    }
}

export default async function UserWatchListsPage(props: { params: Params }) {
    const params = await props.params
    const settings = await getSettings()

    return withAuth({
        render: ({ isAuth }) => (
            <UserWatchlists username={params.username} currentYear={settings.currentYear} isAuth={isAuth} />
        ),
    })
}
