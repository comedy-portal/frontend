import { getUserData } from '@/services/user/user'
import { withAuth } from '@/utils/supertokens/with-auth'

import { HeaderDesktop } from './header-desktop'

export const HeaderDesktopAuthWrapper = async () => {
    return withAuth({
        getAuthData: async () => {
            const userData = await getUserData()

            if (!userData) {
                return null
            }

            return { userName: userData.username }
        },
        render: ({ isAuth, data }) => <HeaderDesktop username={data?.userName ?? null} isAuth={isAuth} />,
    })
}
