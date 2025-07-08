import Image from 'next/image'

import { RatingBar } from '@/components/ui/rating-bar/rating-bar'
import { IContent } from '@/utils/types/content'

import { ContentAddMyRating } from './components/content-add-my-rating'
import { ContentAddToWatchList } from './components/content-add-to-watch-list'
import { ContentAuthors } from './components/content-authors'
import { ContentBack } from './components/content-back'
import { ContentDate } from './components/content-date'
import { ContentDuration } from './components/content-duration'
import { ContentReviewButton } from './components/content-review-button'
import { ContentReviewsFeed } from './components/content-reviews/content-reviews-feed'
import { ContentType } from './components/content-type'
import { ContentWatch } from './components/content-watch'

type ContentProps = {
    content: IContent
    activeUserId: number | null
    isAuth: boolean
}

export const Content = ({ content, activeUserId, isAuth }: ContentProps) => {
    return (
        <div className="wrapper-lg space-y-12 pt-12 pb-24">
            <ContentBack contentType={content.type} />

            <div className="flex flex-col-reverse gap-12 sm:flex-row">
                <div className="flex flex-1 flex-col gap-y-12">
                    <Image
                        src={content.contentImages[0].url}
                        width={500}
                        height={500}
                        className="aspect-video w-full rounded-lg object-cover"
                        alt={content.name}
                    />

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold">{content.name}</h2>
                        <p>{content.metaInfo?.description}</p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold">Рецензии</h2>
                        <ContentReviewsFeed contentId={content.id} activeUserId={activeUserId} isAuth={isAuth} />
                    </section>
                </div>

                <div className="flex shrink-0 flex-col gap-y-6 sm:w-[368px]">
                    <h1 className="text-4xl font-bold">{content.name}</h1>

                    <RatingBar
                        value={content.rating.avgRating}
                        reviewsCount={content.rating.reviewsCount}
                        caption="Общий рейтинг"
                    />

                    {content.reviews && content.reviews.length > 0 ? (
                        <RatingBar value={content.reviews[0].mark} caption="Мой рейтинг" />
                    ) : (
                        <ContentAddMyRating
                            contentId={content.id}
                            value={content.reviews?.[0]?.mark || null}
                            isAuth={isAuth}
                        />
                    )}

                    <ContentAuthors comedians={content.comedians} group={content.group} />
                    <ContentType type={content.type} />
                    <ContentDate month={content.month} year={content.year} />
                    <ContentDuration duration={content.duration} />

                    {content.metaInfo && <ContentWatch links={content.metaInfo.links} />}

                    <div className="flex flex-col gap-y-2">
                        <ContentAddToWatchList
                            contentId={content.id}
                            isAuth={isAuth}
                            isInWatchlist={(content.watchlists?.length ?? 0) > 0}
                        />

                        <ContentReviewButton contentId={content.id} review={content.reviews?.[0]} isAuth={isAuth} />
                    </div>
                </div>
            </div>
        </div>
    )
}
