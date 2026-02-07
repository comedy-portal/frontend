import { UserWatchlistsControlsFilter } from './user-watchlists-controls-filter'
import { UserWatchlistsControlsSort } from './user-watchlists-controls-sort'

type UserWatchlistsControlsProps = {
    currentYear: number
}

export const UserWatchlistsControls = ({ currentYear }: UserWatchlistsControlsProps) => {
    return (
        <div className="flex items-center justify-between">
            <UserWatchlistsControlsFilter currentYear={currentYear} />
            <UserWatchlistsControlsSort />
        </div>
    )
}
