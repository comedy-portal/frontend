'use client'

import classNames from 'classnames'

import { ContentBlockRow } from '@/components/features/common/content-block/content-block-row'
import { EmptyMessage } from '@/components/ui/empty-message'
import { ContentType } from '@/utils/enums/common'
import { IImage, ILink, IRating } from '@/utils/types/common'

type ComedianContentProps = {
    content:
        | {
              id: number
              name: string
              type: ContentType
              year: number
              month: number | null
              duration: number | null
              rating: IRating
              contentImages: IImage[]
              metaInfo: {
                  description: string | null
                  facts: string[]
                  links: ILink[]
              } | null
              // own review for logged-in user only, 1 object in the array
              reviews?: {
                  id: number
                  mark: number
                  text?: string // not needed for "get content many"
                  createdAt: Date
              }[]
              // own added to watchlist date for logged-in user only, 1 object in the array
              watchlists?: {
                  createdAt: Date
              }[]
          }[]
        | null
    isAuth: boolean
}

export const ComedianContent = ({ content, isAuth }: ComedianContentProps) => {
    if (!content || content.length === 0) {
        return (
            <EmptyMessage>
                У этого комика пока нет контента.
                <br />
                Зайдите позже, возможно, он скоро появится.
            </EmptyMessage>
        )
    }

    return (
        <div className={classNames('lg:block lg:space-y-3', 'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6')}>
            {content.map(item => (
                <ContentBlockRow
                    key={`comedian-content-feed-item-${item.id}`}
                    id={item.id}
                    name={item.name}
                    description={item.metaInfo?.description}
                    type={item.type}
                    year={item.year}
                    duration={item.duration}
                    avgRating={item.rating.avgRating}
                    myRating={item.reviews?.[0]?.mark}
                    myReviewId={item.reviews?.[0]?.id}
                    contentUrl={`/content/${item.type.toLowerCase()}/${item.id}`}
                    imageUrl={item.contentImages[0]?.url || ''}
                    isInWatchlist={(item.watchlists?.length ?? 0) > 0}
                    isAuth={isAuth}
                />
            ))}
        </div>
    )
}
