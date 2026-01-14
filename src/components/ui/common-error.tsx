import { TriangleAlertIcon } from 'lucide-react'

export const CommonError = () => {
    return (
        <div className="border border-red-100 bg-red-50 p-8 text-gray-500">
            <div className="flex flex-col items-center gap-y-2 text-center">
                <TriangleAlertIcon className="text-red-500" size={32} />
                <div>
                    Ошибка загрузки.
                    <br />
                    Попробуйте обновить страницу или зайдите позже.
                </div>
            </div>
        </div>
    )
}
