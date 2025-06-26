import { ReactNode } from 'react'

import type { Metadata } from 'next/types'

import { User } from '@/components/features/user/user'

export const metadata: Metadata = {
    robots: 'noindex, nofollow',
}

type Params = Promise<{ username: string }>

export default async function UsersLayout(props: { children: ReactNode; params: Params }) {
    const params = await props.params
    return <User username={params.username}>{props.children}</User>
}
