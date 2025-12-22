'use client'
import { ContentBlock } from '@/components/features/common/content-block/content-block'
import { EmptyMessage } from '@/components/ui/empty-message'
import { contentAPI } from '@/redux/services/content/content.api'
import { GetTopContentTake } from '@/redux/services/content/content.types'
import { ContentType } from '@/utils/enums/common'
import { getAuthorDisplayNameForContent } from '@/utils/helpers/common'

import { LandingContentFeedSkeleton } from './landing-content-feed-skeleton'

type LandingTopWinnerProps = {
    isAuth: boolean
}

export const LandingTopWinner = ({ isAuth }: LandingTopWinnerProps) => {
    const { data, isSuccess, isError } = contentAPI.useGetTopContentQuery({
        type: ContentType.SPECIAL,
        year: 2025,
        take: GetTopContentTake.FIFTY,
    })

    if (isError) {
        return (
            <div className="text-center text-gray-500">
                Ошибка загрузки. Попробуйте обновить страницу или зайдите позже.
            </div>
        )
    }

    if (isSuccess && data.length === 0) {
        return (
            <EmptyMessage>
                Контент в этой категории пока отсутствует.
                <br />
                Попробуйте зайти позже.
            </EmptyMessage>
        )
    }

    if (!isSuccess) {
        return <LandingContentFeedSkeleton />
    }

    return (
        <section className="flex flex-col gap-y-8 rounded-lg bg-[#46CE62] bg-[linear-gradient(rgba(70,206,98,.75),rgba(70,206,98,.4)),url('/images/top-winner-bg.jpg')] bg-top bg-no-repeat px-4 py-8 sm:p-8">
            <h2 className="text-center text-3xl font-bold text-white">Топ-3 стендап-спешла 2025 года</h2>
            <p className="m-auto text-center font-semibold text-white sm:w-2/3">
                Итоги года по&nbsp;версии пользователей Comedy Portal. Три лучших стендап-концерта 2025-го&nbsp;&mdash;
                самые обсуждаемые, оценённые и&nbsp;запомнившиеся.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                {data.slice(0, 3).map(item => (
                    <ContentBlock
                        key={`landing-content-feed-item-${item.id}`}
                        id={item.id}
                        name={item.name}
                        type={item.type}
                        year={item.year}
                        duration={item.duration}
                        avgRating={item.rating.avgRating}
                        myRating={item.reviews?.[0]?.mark}
                        myReviewId={item.reviews?.[0]?.id}
                        imageUrl={item.contentImages[0]?.url}
                        author={getAuthorDisplayNameForContent(item)}
                        isInWatchlist={(item.watchlists?.length ?? 0) > 0}
                        isAuth={isAuth}
                    />
                ))}
            </div>
        </section>
    )
}
