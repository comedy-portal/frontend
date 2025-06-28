import { ReactNode } from 'react'

import type { Metadata } from 'next/types'

import { Layout } from '@/components/features/layout/layout/layout'
import { getUserByName } from '@/services/users'

export const metadata: Metadata = {
    robots: 'noindex, nofollow',
}

type Params = Promise<{ username: string }>

export default async function UsersLayout(props: { children: ReactNode; params: Params }) {
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
                    href: `/users/${lowerUsername}/reviews`,
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
