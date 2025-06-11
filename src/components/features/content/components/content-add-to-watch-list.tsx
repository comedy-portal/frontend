import { HeartPlusIcon } from 'lucide-react'

export const ContentAddToWatchList = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:!items-start sm:!justify-start sm:!text-left">
            <HeartPlusIcon size={40} strokeWidth={1.5} stroke="rgb(87, 153, 239)" />
            <div>
                <div className="hidden sm:block">Смотреть</div>
                <div>позже</div>
            </div>
        </div>
    )
}
