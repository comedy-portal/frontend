import { ComedianBlock } from '@/components/ui/comedian-block/comedian-block'
import { EmptyMessage } from '@/components/ui/empty-message'

type GroupCompositionProps = {
    comedians: {
        id: number
        name: string
        surname: string
        slug: string
        isAgent: boolean
    }[]
}

export const GroupComposition = ({ comedians }: GroupCompositionProps) => {
    if (!comedians || comedians.length === 0) {
        return (
            <EmptyMessage>
                У этой группы пока нет комиков в составе.
                <br />
                Зайдите позже, возможно, они скоро появятся.
            </EmptyMessage>
        )
    }

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4">
            {comedians.map(item => (
                <ComedianBlock
                    key={`comedians-feed-item-${item.slug}`}
                    slug={item.slug}
                    name={item.name}
                    surname={item.surname}
                />
            ))}
        </div>
    )
}
