import { VenuesControlsFilter } from './venues-controls-filter'
import { VenuesControlsSort } from './venues-controls-sort'

export const VenuesControls = () => {
    return (
        <div className="flex items-center justify-between">
            <VenuesControlsFilter />
            <VenuesControlsSort />
        </div>
    )
}
