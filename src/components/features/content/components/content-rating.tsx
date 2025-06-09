import { StarIcon } from 'lucide-react'

type ContentRatingProps = {
    avgRating: number
}

export const ContentRating = ({ avgRating }: ContentRatingProps) => {
    return (
        <div className="flex items-center gap-x-2 text-nowrap">
            <StarIcon size={36} strokeWidth={1.5} /> <span className="hidden sm:block">Рейтинг:</span>{' '}
            <span>{avgRating}</span> / 10
        </div>
    )
}
