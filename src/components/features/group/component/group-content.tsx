import classNames from 'classnames'

import { ContentBlockRow } from '@/components/ui/content-block/content-block-row'
import { EmptyMessage } from '@/components/ui/empty-message'
import { ContentType } from '@/utils/enums/common'
import { IImage, ILink, IRating } from '@/utils/types/common'

type GroupContentProps = {
    content: {
        id: number
        name: string
        type: ContentType
        year: number
        month: number
        duration?: number
        rating: IRating
        contentImages: IImage[]
        metaInfo: {
            description: string | null
            facts: string[]
            links: ILink[]
        } | null
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
        <div className={classNames('lg:block lg:space-y-2', 'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6')}>
            {content.map(item => (
                <ContentBlockRow
                    key={`group-content-feed-item-${item.id}`}
                    id={item.id}
                    name={item.name}
                    description={item.metaInfo?.description}
                    type={item.type}
                    year={item.year}
                    duration={item.duration}
                    avgRating={item.rating.avgRating}
                    contentUrl={`/content/${item.type.toLowerCase()}/${item.id}`}
                    imageUrl={item.contentImages[0]?.url || ''}
                />
            ))}
        </div>
    )
}
