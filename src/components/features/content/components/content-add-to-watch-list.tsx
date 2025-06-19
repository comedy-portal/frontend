import { HeartPlusIcon } from 'lucide-react'

export const ContentAddToWatchList = () => {
    return (
        <div className="flex items-center gap-x-2">
            <HeartPlusIcon size={40} strokeWidth={1.5} stroke="rgb(87, 153, 239)" />
            <div className="cursor-pointer text-sm hover:text-blue-500">
                <div className="hidden sm:block">Смотреть</div>
                <div>позже</div>
            </div>
        </div>
    )
}
