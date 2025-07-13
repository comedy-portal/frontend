import { notFound } from 'next/navigation'

import { UserSettings } from '@/components/features/user/user-settings/user-settings'
import { getUserData } from '@/services/user/user'
import { getUserByName } from '@/services/users/users'
import { getSSRSessionHelper } from '@/utils/supertokens/supertokens.utils'
import { TryRefreshComponent } from '@/utils/supertokens/try-refresh-component'

type Params = Promise<{ username: string }>

export default async function UserSettingsPage(props: { params: Params }) {
    const params = await props.params
    const user = await getUserByName(params.username)
    const lowerUsername = user.username.toLowerCase()

    const { accessTokenPayload, hasToken } = await getSSRSessionHelper()

    if (!accessTokenPayload) {
        if (!hasToken) {
            /**
             * This means that the user is not logged in. If you want to display some other UI in this
             * case, you can do so here.
             */
            notFound()
        }

        /**
         * This means that the session does not exist but we have session tokens for the user. In this case
         * the `TryRefreshComponent` will try to refresh the session.
         *
         * To learn about why the 'key' attribute is required refer to: https://github.com/supertokens/supertokens-node/issues/826#issuecomment-2092144048
         */
        return <TryRefreshComponent key={Date.now()} />
    }

    const activeUser = await getUserData()
    const isOwnProfile = activeUser.username.toLowerCase() === lowerUsername

    if (!isOwnProfile) {
        /**
         * If the user is trying to access another user's settings, we can return a 404.
         */
        notFound()
    }

    return <UserSettings username={lowerUsername} />
}
