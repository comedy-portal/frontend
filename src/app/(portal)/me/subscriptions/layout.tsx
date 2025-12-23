import { Metadata } from 'next'

import { Layout } from '@/components/features/layout/layout/layout'
import { UserSidebar } from '@/components/features/user/components/sidebar/user-sidebar'
import { getUserData } from '@/services/user/user'
import { getUserByName } from '@/services/users/users'
import { withAuth } from '@/utils/supertokens/with-auth'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Подписки - Comedy Portal',
}

export default function SubscriptionsLayout(props: { children: React.ReactNode }) {
    return withAuth({
        onUnauth: 'notFound',
        getAuthData: async () => {
            const activeUser = await getUserData()
            const user = await getUserByName(activeUser.username)
            return { user }
        },
        render: ({ data }) => (
            <Layout
                title="Подписки"
                size="sm"
                nav={[
                    { label: 'Мои подписки', href: '/me/subscriptions' },
                    {
                        label: 'Уведомления',
                        href: '/me/subscriptions/notifications',
                    },
                ]}
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
