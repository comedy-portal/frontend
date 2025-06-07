import { CirclePlayIcon } from 'lucide-react'

type ContentPlayButtonProps = {
    duration: number | null
}

export const ContentPlayButton = ({ duration }: ContentPlayButtonProps) => {
    return (
        <div className="flex cursor-pointer items-center gap-x-2">
            <CirclePlayIcon size={40} strokeWidth={1.5} />

            <div className="hidden gap-x-1 sm:flex">
                <span>Смотреть</span>
                {duration && <span>{duration} мин.</span>}
            </div>
        </div>
    )
}
