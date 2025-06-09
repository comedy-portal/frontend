import { IContent } from '@/utils/types/content'

import { ContentAddToWatchList } from './components/content-add-to-watch-list'
import { ContentAuthor } from './components/content-author'
import { ContentCover } from './components/content-cover'
import { ContentDescription } from './components/content-description'
import { ContentFacts } from './components/content-facts'
import { ContentHeader } from './components/content-header'
import { ContentMyRating } from './components/content-my-rating'
import { ContentPlay } from './components/content-play'
import { ContentRating } from './components/content-rating'
import { ContentReviews } from './components/content-reviews'

type ContentProps = IContent

export const Content = (props: ContentProps) => {
    return (
        <div>
            <div className="mb-3 space-y-2">
                <ContentHeader name={props.name} />
                <ContentAuthor month={props.month} year={props.year} comedians={props.comedians} group={props.group} />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="space-y-12 lg:col-span-2">
                    <ContentCover cover={props.contentImages[0]?.url} name={props.name} />
                    <ContentDescription description={props.metaInfo?.description} />
                    <ContentFacts facts={props.metaInfo?.facts} />
                    <ContentReviews />
                </div>

                <div className="space-y-12 lg:col-span-1">
                    <div className="sticky top-20 flex flex-col gap-y-6">
                        <ContentRating avgRating={props.rating.avgRating} reviewsCount={props.rating.reviewsCount} />
                        <ContentMyRating />
                        <ContentAddToWatchList />
                        <ContentPlay duration={props.duration} />
                    </div>
                </div>
            </div>
        </div>
    )
}
