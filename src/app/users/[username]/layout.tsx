import { Layout } from '@/components/features/layout/layout/layout'
import { getUserByName } from '@/services/users/users'

type Params = Promise<{ username: string }>

export default async function UsersLayout(props: { children: React.ReactNode; params: Params }) {
    const params = await props.params
    const user = await getUserByName(params.username)
    const lowerUsername = user.username.toLowerCase()

    return (
        <Layout
            title={user.username}
            size="sm"
            nav={[
                {
                    label: 'Рецензии',
                    href: `/users/${lowerUsername}`,
                },
                {
                    label: 'Избранное',
                    href: `/users/${lowerUsername}/watchlists`,
                },
            ]}
        >
            {props.children}
        </Layout>
    )
}
