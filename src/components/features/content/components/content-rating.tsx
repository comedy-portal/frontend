import { StarIcon } from 'lucide-react'

type ContentRatingProps = {
    avgRating: number
    reviewsCount: number
}

export const ContentRating = ({ avgRating, reviewsCount }: ContentRatingProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:!items-start sm:!justify-start sm:!text-left">
            <StarIcon size={40} strokeWidth={1.5} fill="rgb(245, 197, 24)" stroke="rgb(245, 197, 24)" />
            <div className="text-sm">
                <div>Рейтинг: {avgRating} / 10</div>
                <div>Отзывов: {reviewsCount}</div>
            </div>
        </div>
    )
}
