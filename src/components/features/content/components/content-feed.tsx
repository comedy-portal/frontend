import { ContentBlock } from '@/components/ui/content-block'
import { IContent } from '@/types/content'

type ContentFeedProps = {
    items: IContent[]
}

export const ContentFeed = async ({ items }: ContentFeedProps) => {
    if (items.length === 0) {
        return (
            <div className="text-center text-gray-500">
                Контент в этой категории пока отсутствует.
                <br />
                Попробуйте выбрать другую категорию или зайдите позже.
            </div>
        )
    }

    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
            {items.map(item => (
                <ContentBlock key={`content-block-${item.id}`} content={item} />
            ))}
        </div>
    )
}
