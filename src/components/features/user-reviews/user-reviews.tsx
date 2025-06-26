import { MicOffIcon } from 'lucide-react'

export const UserReviews = () => {
    return (
        <div className="flex flex-col items-center gap-y-4 py-24 text-center text-sm text-gray-500">
            <MicOffIcon strokeWidth={1} size={64} className="text-gray-400" />
            Вы еще не написали ни одной рецензии.
            <br />
            Напишите рецензию на контент, чтобы она появилась здесь.
        </div>
    )
}
