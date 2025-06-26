import { ComediansFeed } from './components/comedians-feed'
import { ComediansHeader } from './components/comedians-header'

export const Comedians = () => {
    return (
        <div>
            <ComediansHeader />
            <div className="container py-12">
                <ComediansFeed />
            </div>
        </div>
    )
}
