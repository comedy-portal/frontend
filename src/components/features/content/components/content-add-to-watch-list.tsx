import { HeartPlusIcon } from 'lucide-react'

export const ContentAddToWatchList = () => {
    return (
        <div className="flex cursor-pointer items-center gap-x-2 text-sm">
            <HeartPlusIcon size={40} strokeWidth={1.5} stroke="rgb(87, 153, 239)" />
            <div>
                <div className="hidden sm:block">Смотреть</div>
                <div>позже</div>
            </div>
        </div>
    )
}
