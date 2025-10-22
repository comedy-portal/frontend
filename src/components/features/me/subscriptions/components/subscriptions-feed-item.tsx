'use client'

import { BellOffIcon } from 'lucide-react'

import Link from 'next/link'
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
            await unsubscribe({ id, type }).unwrap()
            router.refresh()
        } catch {
            toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
        }
    }

    const href = type === 'group' ? `/comedians/groups/${slug}` : `/comedians/${slug}`

    return (
        <div className="flex gap-x-4">
            <Link href={href}>
                <ImageWithFallback
                    src={`/images/${type}s/${slug}.jpg`}
                    alt={name}
                    width={80}
                    height={80}
                    className="h-20 w-20 shrink-0 rounded-lg"
                />
            </Link>
            <div className="flex flex-col justify-center gap-y-2 sm:flex-1 sm:flex-row sm:items-center sm:justify-between sm:gap-y-0">
                <Link href={href} className="text-lg font-bold">
                    {name}
                </Link>
                <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center justify-center gap-x-2"
                    onClick={handleUnsubscribe}
                >
                    <BellOffIcon size={16} /> Убрать из подписок
                </Button>
            </div>
        </div>
    )
}
