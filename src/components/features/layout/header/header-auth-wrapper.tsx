import { getUserData } from '@/services/user/user'
import { withAuth } from '@/utils/hoc/with-auth'

import { Header } from './header'

export const HeaderAuthWrapper = async () => {
    return withAuth({
        getAuthData: async () => {
            const userData = await getUserData()
            return { userName: userData.username }
        },
        render: ({ isAuth, data }) => <Header username={data?.userName ?? null} isAuth={isAuth} />,
    })
}
