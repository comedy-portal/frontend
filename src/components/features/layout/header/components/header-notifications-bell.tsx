import { BellIcon } from 'lucide-react'

import Link from 'next/link'

import { getLastEventId } from '@/redux/features/user-slice'
import { useAppSelector } from '@/redux/hooks'
import { notificationAPI } from '@/redux/services/notification/notification.api'

export const NotificationsBell = () => {
    const lastEventId = useAppSelector(getLastEventId)

    const { data, isSuccess } = notificationAPI.useGetNotificationsQuery()

    const hasNew =
        isSuccess && data.length > 0 && (lastEventId === null || Math.max(...data.map(n => n.id)) > lastEventId)

    return (
        <Link href="/me/subscriptions/notifications" className="relative cursor-pointer text-gray-300 hover:text-white">
            <BellIcon />
            {hasNew && (
                <div className="absolute top-0 right-0 box-content size-2 rounded-full border-2 border-gray-950 bg-red-500" />
            )}
        </Link>
    )
}
