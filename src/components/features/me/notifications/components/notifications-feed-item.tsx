'use client'

import { useRouter } from 'next/navigation'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { getTimeAgo } from '@/utils/helpers/common'
import { INotification, INotificationContent } from '@/utils/types/notifications'

type NotificationsFeedItemProps = {
    entity: INotification | null
    content: INotificationContent | null
    createdAt: Date
}

export const NotificationsFeedItem = ({ entity, content, createdAt }: NotificationsFeedItemProps) => {
    const router = useRouter()

    return (
        <div
            className="flex cursor-pointer items-center gap-x-2 text-gray-700 hover:text-gray-950 sm:gap-x-4"
            onClick={() => router.push(`/content/${content?.type.toLowerCase()}/${content?.id}`)}
        >
            <ImageWithFallback
                src="https://img.youtube.com/vi/CIf-0oTm0hM/maxresdefault.jpg"
                width={76}
                height={48}
                className="aspect-video h-12 w-auto rounded-lg align-top"
                alt={''}
            />

            <div>
                <div className="text-sm text-gray-500">
                    {entity?.name} ({getTimeAgo(createdAt)})
                </div>
                <div className="line-clamp-1 max-h-6 font-bold">{content?.name}</div>
            </div>
        </div>
    )
}
