import { Metadata } from 'next'

import { Welcome } from '@/components/features/welcome/welcome'
import { getUserData } from '@/services/user/user'
import { withAuth } from '@/utils/supertokens/with-auth'

export const dynamic = 'force-static'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Добро пожаловать!',
    description:'На этой странице Вы найдете краткое руководство по основным фичам нашего портала.',
    keywords: ['топ стендап концертов', 'лучшие стендап концерты', 'русский стендап концерты', 'стендап рейтинг', 'лучшие стендап концерты']
}

export default function WelcomePage() {
    return withAuth({
        getAuthData: async () => {
            const userData = await getUserData()

            if (!userData) {
                return null
            }

            return { userName: userData.username }
        },
        render: ({ isAuth, data }) => <Welcome username={data?.userName} isAuth={isAuth} />,
    })
}
