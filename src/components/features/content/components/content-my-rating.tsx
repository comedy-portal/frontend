import { StarIcon } from 'lucide-react'

export const ContentMyRating = () => {
    return (
        <div className="flex cursor-pointer items-center gap-x-2 text-sm">
            <StarIcon size={40} strokeWidth={1.5} stroke="rgb(245, 197, 24)" />
            <div>
                <div className="text-nowrap">Мой рейтинг</div>
                <div>Оценить</div>
            </div>
        </div>
    )
}
