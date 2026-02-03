import { UserWatchlistsControls } from './components/user-watchlists-controls/user-watchlists-controls'
import { UserWatchlistsFeed } from './components/user-watchlists-feed'

type UserWatchlistsProps = {
    username: string
    isAuth: boolean
}

export const UserWatchlists = ({ username, isAuth }: UserWatchlistsProps) => {
    return (
        <div className="space-y-6">
            <UserWatchlistsControls />
            <UserWatchlistsFeed username={username} isAuth={isAuth} />
        </div>
    )
}
