import { VenuesControls } from './components/venues-controls/venues-controls'
import { VenuesFeed } from './components/venues-feed'

export const Venues = () => {
    return (
        <div className="space-y-6">
            {/* <div className="flex h-125 items-center justify-center bg-gray-200">This is Map</div> */}
            <VenuesControls />
            <VenuesFeed />
        </div>
    )
}
