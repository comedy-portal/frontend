import { Metadata } from 'next'

import { UserWatchlists } from '@/components/features/user/user-watchlists/user-watchlists'

type Params = Promise<{ username: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params

    return {
        title: `Избранное пользователя ${params.username} - Comedy Portal`,
    }
}

export default async function UserWatchListsPage(props: { params: Params }) {
    const params = await props.params
    return <UserWatchlists username={params.username} />
}
