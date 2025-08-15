import { Metadata } from 'next'

import { UserReviews } from '@/components/features/user/user-reviews/user-reviews'
import { getUserData } from '@/services/user/user'
import { getUserByName } from '@/services/users/users'
import { withAuth } from '@/utils/supertokens/with-auth'

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

    return withAuth({
        getAuthData: async () => {
            const activeUser = await getUserData()
            return { activeUserId: activeUser.id }
        },
        render: ({ isAuth, data }) => (
            <UserReviews userId={user.id} activeUserId={data?.activeUserId ?? null} isAuth={isAuth} />
        ),
    })
}
