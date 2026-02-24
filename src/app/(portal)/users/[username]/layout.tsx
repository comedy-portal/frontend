import { Layout } from '@/components/features/layout/layout/layout'
import { UserSidebar } from '@/components/features/user/components/sidebar/user-sidebar'
import { getUserByName } from '@/services/users/users'

type Params = Promise<{ username: string }>

export default async function UsersLayout(props: { children: React.ReactNode; params: Params }) {
    const params = await props.params
    const user = await getUserByName(params.username)

    return (
        <Layout
            title="Профиль"
            size="sm"
            nav={[
                { label: 'Оценки', href: `/users/${params.username}` },
                {
                    label: 'Избранное',
                    href: `/users/${params.username}/watchlists`,
                },
            ]}
            sidebar={{
                component: (
                    <UserSidebar
                        username={user.username}
                        daysSinceRegistration={user.daysSinceRegistration}
                        _count={user._count}
                    />
                ),
                showOnMobile: true,
            }}
        >
            {props.children}
        </Layout>
    )
}
