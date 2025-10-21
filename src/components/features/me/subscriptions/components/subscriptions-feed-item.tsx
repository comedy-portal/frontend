'use client'

import { BellOffIcon } from 'lucide-react'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/forms/button'
import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { messages } from '@/messages'
import { subscriptionsAPI } from '@/redux/services/subscriptions/subscriptions.api'
import { SubscriptionType } from '@/redux/services/subscriptions/subscriptions.types'
import { useToast } from '@/utils/providers/toast-provider'

type SubscriptionsFeedItemProps = {
    id: number
    slug: string
    name: string
    type: SubscriptionType
}

export const SubscriptionsFeedItem = ({ id, slug, name, type }: SubscriptionsFeedItemProps) => {
    const router = useRouter()
    const toast = useToast()

    const [unsubscribe] = subscriptionsAPI.useUnsubscribeMutation()

    const handleUnsubscribe = async () => {
        try {
            unsubscribe({ id, type }).unwrap()
            router.refresh()
        } catch {
            toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
        }
    }

    return (
        <div className="flex items-center justify-between px-4">
            <div className="mb-4 flex items-center gap-x-4">
                <ImageWithFallback
                    src={`/images/comedians/${slug}.jpg`}
                    alt={name}
                    width={80}
                    height={80}
                    className="h-20 w-20 shrink-0 rounded-lg"
                />
                <div className="text-lg font-bold">{name}</div>
            </div>

            <Button
                variant="outline"
                size="sm"
                className="flex items-center justify-center gap-x-2"
                onClick={handleUnsubscribe}
            >
                <BellOffIcon size={16} /> Убрать из подписок
            </Button>
        </div>
    )
}
