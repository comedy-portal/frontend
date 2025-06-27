import { IContent } from '@/utils/types/content'

import { ContentAddToWatchList } from './components/content-add-to-watch-list'
import { ContentAuthor } from './components/content-author'
import { ContentCover } from './components/content-cover'
import { ContentDescription } from './components/content-description'
import { ContentFacts } from './components/content-facts'
import { ContentMyRating } from './components/content-my-rating'
import { ContentPlay } from './components/content-play'
import { ContentRating } from './components/content-rating'
import { ContentReviews } from './components/content-reviews'
import { ContentTitle } from './components/content-title'

type ContentProps = IContent

export const Content = (props: ContentProps) => {
    return (
        <div className="wrapper-sm py-8 sm:py-16">
            <div className="flex flex-col gap-y-4 sm:gap-y-8">
                <div className="flex flex-col gap-y-2">
                    <ContentTitle name={props.name} />
                    <ContentAuthor
                        month={props.month}
                        year={props.year}
                        type={props.type}
                        comedians={props.comedians}
                        group={props.group}
                    />
                </div>

                <ContentCover cover={props.contentImages[0]?.url} name={props.name} />

                <div className="flex items-center justify-between rounded bg-gray-50 p-4">
                    <div className="flex items-center gap-x-6">
                        <ContentRating avgRating={props.rating.avgRating} reviewsCount={props.rating.reviewsCount} />
                        <ContentMyRating />
                    </div>
                    <div className="flex items-center gap-x-6">
                        <ContentAddToWatchList contentId={props.id} isInWatchlist={!!props.watchlists?.length} />
                        <ContentPlay duration={props.duration} />
                    </div>
                </div>

                <ContentDescription description={props.metaInfo?.description} />
                <ContentFacts facts={props.metaInfo?.facts} />
                <ContentReviews />
            </div>
        </div>
    )
}
