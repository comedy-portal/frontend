import { ComediansFeed } from './components/comedians-feed'

export const Comedians = () => {
    return (
        <div className="wrapper-lg py-8 sm:py-16">
            <div className="flex flex-col gap-y-4 sm:gap-y-8">
                <h1 className="mb-0!">Комики</h1>
                <hr className="border-gray-200! opacity-100!" />
                <ComediansFeed />
            </div>
        </div>
    )
}
