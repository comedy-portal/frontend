'use client'

import { BellOffIcon, BellPlusIcon } from 'lucide-react'

import { useRouter } from 'next/navigation'

import { SignUp } from '@/components/features/auth/sign-up'
import { Button } from '@/components/ui/forms/button'
import { messages } from '@/messages'
import { subscriptionsAPI } from '@/redux/services/subscriptions/subscriptions.api'
import { SubscriptionType } from '@/redux/services/subscriptions/subscriptions.types'
import { useDialog } from '@/utils/providers/dialog-provider'
import { useToast } from '@/utils/providers/toast-provider'

type SubscribeButtonProps = {
    id: number
    type: SubscriptionType
    isActive: boolean
    isAuth: boolean
}

export const SubscribeButton = ({ id, type, isActive, isAuth }: SubscribeButtonProps) => {
    const toast = useToast()
    const dialog = useDialog()
    const router = useRouter()

    const [subscribe] = subscriptionsAPI.useSubscribeMutation()
    const [unsubscribe] = subscriptionsAPI.useUnsubscribeMutation()

    const toggle = async () => {
        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }

        try {
            await (isActive ? unsubscribe({ id, type }) : subscribe({ id, type }))
            router.refresh()
        } catch {
            toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
        }
    }

    return (
        <Button
            size="lg"
            variant="primary"
            className="flex w-full items-center justify-center gap-x-2"
            onClick={toggle}
        >
            {isActive ? (
                <>
                    <BellOffIcon />
                    Убрать из подписок
                </>
            ) : (
                <>
                    <BellPlusIcon />
                    Подписаться
                </>
            )}
        </Button>
    )
}
