import { CirclePlayIcon } from 'lucide-react'

type ContentPlayProps = {
    duration: number | null
}

export const ContentPlay = ({ duration }: ContentPlayProps) => {
    return (
        <div className="flex cursor-pointer items-center gap-x-2 text-sm">
            <CirclePlayIcon size={40} strokeWidth={1.5} />
            <div>
                <div>Смотреть</div>
                {duration && <div className="text-nowrap">{duration} мин.</div>}
            </div>
        </div>
    )
}
