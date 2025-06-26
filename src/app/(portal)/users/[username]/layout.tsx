import { ReactNode } from 'react'

import type { Metadata } from 'next/types'

import { UserHeader } from '@/components/features/user/components/user-header'
import { UserNav } from '@/components/features/user/components/user-nav'
import { getUserByName } from '@/services/users'

export const metadata: Metadata = {
    robots: 'noindex, nofollow',
}

type Params = Promise<{ username: string }>

export default async function UsersLayout(props: { children: ReactNode; params: Params }) {
    const params = await props.params
    const user = await getUserByName(params.username)

    return (
        <div>
            <UserHeader username={user.username} />
            <div className="container py-12">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-[250px_1fr]">
                    <UserNav slug={user.username} />
                    <main className="rounded bg-white p-6 shadow-xs">{props.children}</main>
                </div>
            </div>
        </div>
    )
}
