import { UserWatchlistsFeed } from './components/user-watchlists-feed'

type UserWatchlistsProps = {
    username: string
}

export const UserWatchlists = ({ username }: UserWatchlistsProps) => {
    return <UserWatchlistsFeed username={username} />
}
