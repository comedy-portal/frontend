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

type ContentProps = {
    content: IContent
    isAuth: boolean
}

export const Content = ({ content, isAuth }: ContentProps) => {
    return (
        <div className="wrapper-sm py-8 sm:py-16">
            <div className="flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-2">
                    <ContentTitle name={content.name} />
                    <ContentAuthor
                        month={content.month}
                        year={content.year}
                        type={content.type}
                        comedians={content.comedians}
                        group={content.group}
                    />
                </div>

                <ContentCover cover={content.contentImages[0]?.url} name={content.name} />

                <div className="flex items-center justify-between rounded bg-gray-50 p-4">
                    <div className="flex items-center gap-x-6">
                        <ContentRating
                            avgRating={content.rating.avgRating}
                            reviewsCount={content.rating.reviewsCount}
                        />
                        <ContentMyRating />
                    </div>
                    <div className="flex items-center gap-x-6">
                        <ContentAddToWatchList
                            contentId={content.id}
                            isAuth={isAuth}
                            isInWatchlist={!!content.watchlists?.length}
                        />
                        <ContentPlay duration={content.duration} />
                    </div>
                </div>

                <ContentDescription description={content.metaInfo?.description} />
                <ContentFacts facts={content.metaInfo?.facts} />
                <ContentReviews id={content.id} isAuth={isAuth} />
            </div>
        </div>
    )
}
