import { StarIcon } from 'lucide-react'

export const ContentMyRating = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:!items-start sm:!justify-start sm:!text-left">
            <StarIcon size={40} strokeWidth={1.5} stroke="rgb(245, 197, 24)" />
            <div>
                <div className="text-nowrap">Мой рейтинг</div>
                <div>Оценить</div>
            </div>
        </div>
    )
}
