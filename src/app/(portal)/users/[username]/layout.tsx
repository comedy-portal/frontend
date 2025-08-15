import { Layout } from '@/components/features/layout/layout/layout'

type Params = Promise<{ username: string }>

export default async function UsersLayout(props: { children: React.ReactNode; params: Params }) {
    const params = await props.params

    return (
        <Layout
            title={params.username}
            size="sm"
            nav={[
                { label: 'Оценки', href: `/users/${params.username}` },
                { label: 'Избранное', href: `/users/${params.username}/watchlists` },
            ]}
        >
            {props.children}
        </Layout>
    )
}
