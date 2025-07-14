import { Metadata } from 'next'

import { UserReviews } from '@/components/features/user/user-reviews/user-reviews'
import { getUserData } from '@/services/user/user'
import { getUserByName } from '@/services/users/users'
import { getSSRSessionHelper } from '@/utils/supertokens/supertokens.utils'
import { TryRefreshComponent } from '@/utils/supertokens/try-refresh-component'

type Params = Promise<{ username: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params

    return {
        title: `Рецензии пользователя ${params.username} - Comedy Portal`,
    }
}

export default async function UserReviewsPage(props: { params: Params }) {
    const params = await props.params
    const user = await getUserByName(params.username)

    const { accessTokenPayload, hasToken } = await getSSRSessionHelper()

    if (!accessTokenPayload) {
        if (!hasToken) {
            /**
             * This means that the user is not logged in. If you want to display some other UI in this
             * case, you can do so here.
             */
            return <UserReviews userId={user.id} activeUserId={null} isAuth={false} />
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

    return <UserReviews userId={user.id} activeUserId={activeUser.id} isAuth={true} />
}
