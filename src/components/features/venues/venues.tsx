import { VenuesControls } from './components/venues-controls/venues-controls'
import { VenuesFeed } from './components/venues-feed'

export const Venues = () => {
    return (
        <div className="space-y-6">
            <VenuesControls />
            <VenuesFeed />
        </div>
    )
}
