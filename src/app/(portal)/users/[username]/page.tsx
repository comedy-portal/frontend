import { Metadata } from 'next'

import { UserReviews } from '@/components/features/user/user-reviews/user-reviews'
import { getSettings } from '@/services/settings/settings'
import { getUserData } from '@/services/user/user'
import { getUserByName } from '@/services/users/users'
import { withAuth } from '@/utils/supertokens/with-auth'

type Params = Promise<{ username: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params

    return {
        title: `Рецензии пользователя ${params.username}`,
    }
}

export default async function UserReviewsPage(props: { params: Params }) {
    const params = await props.params
    const user = await getUserByName(params.username)
    const settings = await getSettings()

    return withAuth({
        getAuthData: async () => {
            const userData = await getUserData()

            if (!userData) {
                return null
            }

            return { activeUserId: userData.id }
        },
        render: ({ isAuth, data }) => (
            <UserReviews
                userId={user.id}
                activeUserId={data?.activeUserId ?? null}
                currentYear={settings.currentYear}
                isAuth={isAuth}
            />
        ),
    })
}
