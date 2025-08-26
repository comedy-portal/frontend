import { Welcome } from '@/components/features/welcome/welcome'
import { getUserData } from '@/services/user/user'
import { withAuth } from '@/utils/supertokens/with-auth'

export default function WelcomePage() {
    return withAuth({
        getAuthData: async () => {
            const activeUser = await getUserData()
            return { userName: activeUser.username }
        },
        render: ({ isAuth, data }) => <Welcome username={data?.userName} isAuth={isAuth} />,
    })
}
