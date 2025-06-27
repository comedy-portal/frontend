import { ReactNode } from 'react'

import type { Metadata } from 'next/types'

import { User } from '@/components/features/user/user'
import { getUserByName } from '@/services/users'

export const metadata: Metadata = {
    robots: 'noindex, nofollow',
}

type Params = Promise<{ username: string }>

export default async function UsersLayout(props: { children: ReactNode; params: Params }) {
    const params = await props.params
    const user = await getUserByName(params.username)
    return <User username={user.username}>{props.children}</User>
}
