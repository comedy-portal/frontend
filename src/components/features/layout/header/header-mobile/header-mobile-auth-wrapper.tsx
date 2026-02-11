import { getUserData } from '@/services/user/user'
import { withAuth } from '@/utils/supertokens/with-auth'

import { HeaderMobile } from './header-mobile'

export const HeaderMobileAuthWrapper = async () => {
    return withAuth({
        getAuthData: async () => {
            const userData = await getUserData()

            if (!userData) {
                return null
            }

            return { userName: userData.username }
        },
        render: ({ isAuth, data }) => <HeaderMobile username={data?.userName ?? null} isAuth={isAuth} />,
    })
}
