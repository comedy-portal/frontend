import Image from 'next/image'

import { DescriptionBlock } from '@/components/ui/description-block'
import { LinksBlock } from '@/components/ui/links-block'
import { RatingBar } from '@/components/ui/rating-bar/rating-bar'
import { IContent } from '@/utils/types/content'

import { ContentAddToWatchList } from './components/content-add-to-watch-list'
import { ContentAuthors } from './components/content-authors'
import { ContentBack } from './components/content-back'
import { ContentDate } from './components/content-date'
import { ContentDuration } from './components/content-duration'
import { ContentMyRating } from './components/content-my-rating'
import { ContentReviewButton } from './components/content-review-button'
import { ContentReviewsFeed } from './components/content-reviews/content-reviews-feed'
import { ContentType } from './components/content-type'

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

                    {content.metaInfo?.description && (
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold">Описание</h2>
                            <DescriptionBlock text={content.metaInfo.description} limit={1000} />
                        </section>
                    )}

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
                    <ContentMyRating contentId={content.id} review={content.reviews?.[0]} isAuth={isAuth} />
                    <ContentReviewButton contentId={content.id} review={content.reviews?.[0]} isAuth={isAuth} />

                    <ContentAuthors comedians={content.comedians} group={content.group} />
                    <ContentType type={content.type} />
                    <ContentDate month={content.month} year={content.year} />
                    <ContentDuration duration={content.duration} />

                    <LinksBlock caption="Где посмотреть" links={content.metaInfo?.links || []} />

                    <ContentAddToWatchList
                        contentId={content.id}
                        isAuth={isAuth}
                        isInWatchlist={(content.watchlists?.length ?? 0) > 0}
                    />
                </div>
            </div>
        </div>
    )
}
