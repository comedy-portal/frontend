import { UserWatchlists } from '@/components/features/user-watchlists/user-watchlists'

type Params = Promise<{ username: string }>

export default async function UserWatchlistsPage(props: { params: Params }) {
    const params = await props.params
    return <UserWatchlists username={params.username} />
}
