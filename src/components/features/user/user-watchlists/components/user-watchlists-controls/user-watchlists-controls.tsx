import { UserWatchlistsControlsFilter } from './user-watchlists-controls-filter'
import { UserWatchlistsControlsSort } from './user-watchlists-controls-sort'

export const UserWatchlistsControls = () => {
    return (
        <div className="flex items-center justify-between">
            <UserWatchlistsControlsFilter />
            <UserWatchlistsControlsSort />
        </div>
    )
}
