import { Rating } from '@/components/ui/rating'

type ContentTitleProps = {
    name: string
    avgRating: number
}

export const ContentTitle = ({ name, avgRating }: ContentTitleProps) => {
    return (
        <div className="flex items-center gap-x-4">
            <Rating value={avgRating} className="flex-shrink-0" />
            <h1 className="truncate">{name}</h1>
        </div>
    )
}
