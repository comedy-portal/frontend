import { ComediansFeed } from './components/comedians-feed'

export const Comedians = () => {
    return (
        <div className="container py-8 sm:py-16">
            <div className="m-auto flex flex-col gap-y-4 sm:gap-y-8">
                <h1 className="mb-0!">Комики</h1>
                <hr />
                <ComediansFeed />
            </div>
        </div>
    )
}
