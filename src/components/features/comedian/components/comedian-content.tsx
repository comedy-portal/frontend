import { ContentBlock } from '@/components/ui/content-block/content-block'
import { EmptyMessage } from '@/components/ui/empty-message'
import { ContentType } from '@/utils/enums/common'
import { IImage, IRating } from '@/utils/types/common'

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
}

export const ComedianContent = ({ content }: ComedianContentProps) => {
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {content.map(item => (
                <ContentBlock
                    key={`content-many-feed-item-${item.id}`}
                    id={item.id}
                    type={item.type}
                    name={item.name}
                    imageUrl={item.contentImages[0]?.url}
                    year={item.year}
                    avgRating={item.rating.avgRating}
                    myRating={item.reviews?.[0]?.mark}
                />
            ))}
        </div>
    )
}
