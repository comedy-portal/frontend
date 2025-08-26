import { Metadata } from 'next'

import { Welcome } from '@/components/features/welcome/welcome'
import { getUserData } from '@/services/user/user'
import { withAuth } from '@/utils/supertokens/with-auth'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Добро пожаловать в Comedy Portal',
    description:'Место, где любители юмора собираются, чтобы открывать новое, делиться мнением и отслеживать собственную историю просмотров.',
    keywords: ['топ стендап концертов', 'лучшие стендап концерты', 'русский стендап концерты', 'стендап рейтинг', 'лучшие стендап концерты']
}

export default function WelcomePage() {
    return withAuth({
        getAuthData: async () => {
            const activeUser = await getUserData()
            return { userName: activeUser.username }
        },
        render: ({ isAuth, data }) => <Welcome username={data?.userName} isAuth={isAuth} />,
    })
}
