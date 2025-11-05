'use client'

import { CircleArrowLeftIcon } from 'lucide-react'

import Link from 'next/link'

import { DescriptionBlock } from '@/components/ui/description-block'
import { GlobalLoading } from '@/components/ui/global-loading'
import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { LinksBlock } from '@/components/ui/links-block'
import { RatingBar } from '@/components/ui/rating-bar/rating-bar'
import { Share } from '@/components/ui/share'
import { messages } from '@/messages'
import { contentAPI } from '@/redux/services/content/content.api'
import { categories } from '@/utils/dict/categories'

import { ContentAddToWatchList } from './components/content-add-to-watch-list'
import { ContentAuthors } from './components/content-authors'
import { ContentDate } from './components/content-date'
import { ContentDuration } from './components/content-duration'
import { ContentFacts } from './components/content-facts'
import { ContentMyRating } from './components/content-my-rating'
import { ContentReviewButton } from './components/content-review-button'
import { ContentReviewsFeed } from './components/content-reviews/content-reviews-feed'
import { ContentType } from './components/content-type'

type ContentProps = {
    contentId: number
    activeUserId: number | null
    isAuth: boolean
}

export const Content = ({ contentId, activeUserId, isAuth }: ContentProps) => {
    const { data, isSuccess, error } = contentAPI.useGetContentByIdQuery(contentId)

    if (!isSuccess) {
        return <GlobalLoading />
    }

    if (error) {
        return <div>{messages.COMMON_ERROR_MESSAGE}</div>
    }

    return (
        <div className="wrapper space-y-12 pt-12 pb-24">
            <Link
                href={`/content/${data.type.toLowerCase()}`}
                className="inline-flex items-center gap-x-2 hover:text-black"
                data-nosnippet
            >
                <CircleArrowLeftIcon size={24} className="text-inherit" />
                {categories.find(category => category.type === data.type.toLowerCase())?.toBackLabel ||
                    'Назад к контенту'}
            </Link>

            <div className="flex flex-col-reverse gap-12 sm:flex-row">
                <div className="flex flex-1 flex-col gap-y-12">
                    <ImageWithFallback
                        src={data.contentImages[0].url}
                        width={500}
                        height={500}
                        className="aspect-video w-full rounded-lg object-cover"
                        alt={data.name}
                    />

                    {data.metaInfo?.description && (
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold">Описание</h2>
                            <DescriptionBlock text={data.metaInfo.description} limit={1000} />
                        </section>
                    )}

                    {data.metaInfo?.facts && data.metaInfo.facts.length > 0 && (
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold">Факты</h2>
                            <ContentFacts facts={data.metaInfo.facts} />
                        </section>
                    )}

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold">Рецензии</h2>
                        <ContentReviewsFeed contentId={data.id} activeUserId={activeUserId} isAuth={isAuth} />
                    </section>
                </div>

                <div className="flex shrink-0 flex-col gap-y-6 sm:w-[368px]">
                    <h1 className="text-4xl font-bold">{data.name}</h1>

                    <RatingBar
                        value={data.rating.avgRating}
                        reviewsCount={data.rating.reviewsCount}
                        caption="Общий рейтинг"
                    />
                    <ContentMyRating contentId={data.id} review={data.reviews?.[0]} isAuth={isAuth} />
                    <ContentReviewButton contentId={data.id} review={data.reviews?.[0]} isAuth={isAuth} />

                    <Share
                        title={data.name}
                        text={data.metaInfo?.description}
                        url={`${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/content/${data.type.toLowerCase()}/${data.id}`}
                    />

                    <ContentAuthors comedians={data.comedians} group={data.group} />
                    <ContentType type={data.type} />
                    <ContentDate month={data.month} year={data.year} />
                    <ContentDuration duration={data.duration} />

                    <LinksBlock caption="Где посмотреть" links={data.metaInfo?.links || []} />

                    <ContentAddToWatchList
                        contentId={data.id}
                        isAuth={isAuth}
                        isInWatchlist={(data.watchlists?.length ?? 0) > 0}
                    />
                </div>
            </div>
        </div>
    )
}
