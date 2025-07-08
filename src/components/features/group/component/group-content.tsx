import { ContentBlock } from '@/components/ui/content-block/content-block'
import { EmptyMessage } from '@/components/ui/empty-message'
import { ContentType } from '@/utils/enums/common'
import { Image, Rating } from '@/utils/types/common'

type GroupContentProps = {
    content: {
        id: number
        name: string
        type: ContentType
        year: number
        month: number
        duration?: number
        rating: Rating
        contentImages: Image[]
    }[]
}

export const GroupContent = ({ content }: GroupContentProps) => {
    if (!content || content.length === 0) {
        return (
            <EmptyMessage>
                У этой группы пока нет контента.
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
                />
            ))}
        </div>
    )
}
