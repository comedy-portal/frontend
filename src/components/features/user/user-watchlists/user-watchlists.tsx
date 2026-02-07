import { UserWatchlistsControls } from './components/user-watchlists-controls/user-watchlists-controls'
import { UserWatchlistsFeed } from './components/user-watchlists-feed'

type UserWatchlistsProps = {
    username: string
    currentYear: number
    isAuth: boolean
}

export const UserWatchlists = ({ username, currentYear, isAuth }: UserWatchlistsProps) => {
    return (
        <div className="space-y-6">
            <UserWatchlistsControls currentYear={currentYear} />
            <UserWatchlistsFeed username={username} isAuth={isAuth} />
        </div>
    )
}
