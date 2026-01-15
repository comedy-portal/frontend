import { Metadata } from 'next'

import { Layout } from '@/components/features/layout/layout/layout'
import { UserSidebar } from '@/components/features/user/components/sidebar/user-sidebar'
import { getUserData } from '@/services/user/user'
import { getUserByName } from '@/services/users/users'
import { withAuth } from '@/utils/supertokens/with-auth'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Настройки',
}

export default function SettingsLayout(props: { children: React.ReactNode }) {
    return withAuth({
        onUnauth: 'notFound',
        getAuthData: async () => {
            const userData = await getUserData()

            if (!userData) {
                return null
            }

            const user = await getUserByName(userData.username)
            return { user }
        },
        render: ({ data }) => (
            <Layout
                title="Настройки"
                size="sm"
                sidebar={{
                    component: data ? (
                        <UserSidebar
                            username={data.user.username}
                            daysSinceRegistration={data.user.daysSinceRegistration}
                            _count={data.user._count}
                        />
                    ) : null,
                    showOnMobile: false,
                }}
            >
                {props.children}
            </Layout>
        ),
    })
}
