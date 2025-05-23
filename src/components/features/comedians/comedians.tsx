import { ComediansFeed } from './components/comedians-feed'

export const Comedians = () => {
    return (
        <div className="flex flex-col gap-y-12">
            <div>
                <div className="flex items-end justify-between">
                    <h1 className="mb-0 text-2xl font-bold">Комики</h1>
                </div>
                <hr />
                {/* <ContentCategories slug={params.slug} /> */}
            </div>

            <ComediansFeed />
        </div>
    )
}
