import { StarIcon } from 'lucide-react'

export const ContentMyRating = () => {
    return (
        <div className="flex items-center gap-x-2">
            <StarIcon size={40} strokeWidth={1.5} stroke="rgb(245, 197, 24)" />
            <div className="text-sm">
                <div className="text-nowrap">Мой рейтинг</div>
                <div className="cursor-pointer hover:text-blue-500">Оценить</div>
            </div>
        </div>
    )
}
