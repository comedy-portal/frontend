import { Metadata } from 'next'

import { Welcome } from '@/components/features/welcome/welcome'
import { getUserData } from '@/services/user/user'
import { createMetadata } from '@/utils/helpers/metadata'
import { withAuth } from '@/utils/supertokens/with-auth'

// prettier-ignore
export const metadata: Metadata = createMetadata({
    title: 'Добро пожаловать!',
    description: 'Добро пожаловать на Камеди Портал! Узнайте все возможности портала: подписки, поиск контента, рецензии, топы стендап-спешлов и персональный профиль.',
    image: '/images/welcome/hero.jpg',
    path: '/welcome',
    keywords: [
        'Камеди Портал',
        'фичи сайта',
        'подписки на комиков',
        'поиск контента',
        'рецензии стендап',
        'топ стендап-спешлов',
        'личный профиль',
        'обновления портала',
        'стендап шоу',
        'комедийный портал',
    ],
    type: 'website',
})

export default function WelcomePage() {
    return withAuth({
        getAuthData: async () => {
            const userData = await getUserData()

            if (!userData) return null

            return { userName: userData.username }
        },
        render: ({ isAuth, data }) => <Welcome username={data?.userName} isAuth={isAuth} />,
    })
}
