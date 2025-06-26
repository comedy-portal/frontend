import { UserWatchlistsItem } from './components/user-watchlists-item'

export const UserWatchlists = () => {
    return (
        <div className="space-y-2">
            <h1 className="mb-4! text-lg! font-semibold!">Смотреть позже</h1>
            <UserWatchlistsItem />
            <UserWatchlistsItem />
            <UserWatchlistsItem />
            <UserWatchlistsItem />
            <UserWatchlistsItem />
        </div>
    )
}
