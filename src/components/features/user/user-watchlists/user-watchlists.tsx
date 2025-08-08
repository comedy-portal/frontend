import { UserWatchlistsFeed } from './components/user-watchlists-feed'

type UserWatchlistsProps = {
    username: string
    isAuth: boolean
}

export const UserWatchlists = ({ username, isAuth }: UserWatchlistsProps) => {
    return <UserWatchlistsFeed username={username} isAuth={isAuth} />
}
