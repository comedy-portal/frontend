import { CirclePlusIcon, InfoIcon, UserPlusIcon } from 'lucide-react'

export const Notifications = () => {
    return (
        <div className="space-y-8">
            <div className="flex gap-x-4">
                <CirclePlusIcon className="shrink-0" />
                <div>
                    <div className="font-bold">Новое видео</div>
                    <div>Юлия Ахмедова - Название спешла</div>
                </div>
            </div>

            <div className="flex gap-x-4">
                <UserPlusIcon className="shrink-0" />
                <div>
                    <div className="font-bold">Новый комик</div>
                    <div>Юлия Ахмедова</div>
                </div>
            </div>

            <div className="flex gap-x-4">
                <InfoIcon className="shrink-0" />
                <div>
                    <div className="font-bold">Новое обновление</div>
                    <div>Мы улучшили личный кабинет</div>
                </div>
            </div>

            <div className="flex gap-x-4 opacity-60">
                <CirclePlusIcon className="shrink-0" />
                <div>
                    <div className="font-bold">Новое видео</div>
                    <div>Юлия Ахмедова - Название спешла</div>
                </div>
            </div>
        </div>
    )
}
