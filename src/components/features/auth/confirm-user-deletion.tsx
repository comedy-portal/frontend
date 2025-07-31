'use client'

import { useState } from 'react'

import Session from 'supertokens-web-js/recipe/session'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/forms/button'
import { messages } from '@/messages'
import { userAPI } from '@/redux/services/user/user.api'
import { useOnMountUnsafe } from '@/utils/hooks/use-on-mount-unsafe'
import { useToast } from '@/utils/providers/toast-provider'

type ConfirmUserDeletionProps = {
    token: string
}

export const ConfirmUserDeletion = ({ token }: ConfirmUserDeletionProps) => {
    const toast = useToast()
    const router = useRouter()

    const [status, setStatus] = useState<string>()
    const [confirmUserDeletion] = userAPI.useConfirmUserDeletionMutation()

    useOnMountUnsafe(() => {
        const handleConfirmUserRemoval = async () => {
            try {
                const response = await confirmUserDeletion(token).unwrap()
                setStatus(response.status)
                await Session.signOut()
            } catch {
                toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
            }
        }
        handleConfirmUserRemoval()
    })

    if (!status) {
        return <p className="text-center text-sm">Запуск процесса удаления аккаунта ...</p>
    }

    return (
        <div className="space-y-4">
            {status === 'OK' && (
                <p className="text-center text-sm">
                    Процесс удаления запущен. Он&nbsp;может занять несколько дней. Вы&nbsp;можете восстановить свой
                    аккаунт, перейдя по&nbsp;ссылке, отправленной на&nbsp;Вашу электронную почту, пока процесс удаления
                    не&nbsp;завершится.
                </p>
            )}

            {status === 'INVALID_TOKEN_ERROR' && (
                <p className="text-center text-sm">
                    Срок действия ссылки для подтверждения истек. Пожалуйста, повторите запрос на&nbsp;удаление
                    аккаунта.
                </p>
            )}

            <Button variant="outline" className="w-full" onClick={() => router.replace('/')}>
                На главную
            </Button>
        </div>
    )
}
