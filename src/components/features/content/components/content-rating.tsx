import { StarIcon } from 'lucide-react'

type ContentRatingProps = {
    avgRating: number
    reviewsCount: number
}

export const ContentRating = ({ avgRating, reviewsCount }: ContentRatingProps) => {
    return (
        <div className="flex items-center gap-x-2">
            <StarIcon size={40} strokeWidth={1.5} fill="rgb(245, 197, 24)" stroke="rgb(245, 197, 24)" />
            <div className="text-sm">
                <div>
                    Рейтинг: <strong>{avgRating} / 10</strong>
                </div>
                <div>Отзывов: {reviewsCount}</div>
            </div>
        </div>
    )
}
