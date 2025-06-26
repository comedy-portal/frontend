import { StarIcon } from 'lucide-react'

type ContentRatingProps = {
    avgRating: number
    reviewsCount: number
}

export const ContentRating = ({ avgRating, reviewsCount }: ContentRatingProps) => {
    return (
        <div className="flex items-center gap-x-2 text-sm">
            <StarIcon size={16} fill="rgb(245, 197, 24)" stroke="rgb(245, 197, 24)" />
            <strong>
                {avgRating} ({reviewsCount})
            </strong>
        </div>
    )
}
