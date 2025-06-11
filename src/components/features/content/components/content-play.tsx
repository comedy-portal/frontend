import { CirclePlayIcon } from 'lucide-react'

type ContentPlayProps = {
    duration: number | null
}

export const ContentPlay = ({ duration }: ContentPlayProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:!items-start sm:!justify-start sm:!text-left">
            <CirclePlayIcon size={40} strokeWidth={1.5} />
            <div>
                <div>Смотреть</div>
                {duration && <div className="text-nowrap">{duration} мин.</div>}
            </div>
        </div>
    )
}
