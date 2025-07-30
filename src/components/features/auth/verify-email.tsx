'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/forms/button'
import { messages } from '@/messages'
import { userAPI } from '@/redux/services/user/user.api'
import { useOnMountUnsafe } from '@/utils/hooks/use-on-mount-unsafe'
import { useToast } from '@/utils/providers/toast-provider'

type VerifyEmailProps = {
    token: string
}

export const VerifyEmail = ({ token }: VerifyEmailProps) => {
    const toast = useToast()
    const router = useRouter()
    const [status, setStatus] = useState<string>()

    const [changeUserEmail, { isLoading }] = userAPI.useChangeUserEmailMutation()

    useOnMountUnsafe(() => {
        const handleVerifyEmail = async () => {
            try {
                const response = await changeUserEmail({ token }).unwrap()
                setStatus(response.status)
            } catch (err: unknown) {
                const serverError = err as {
                    status: number
                    data?: { message?: string }
                }

                if (serverError?.data?.message === 'INVALID_TOKEN_ERROR') {
                    setStatus('INVALID_TOKEN_ERROR')
                } else {
                    toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
                }
            }
        }

        handleVerifyEmail()
    })

    if (!status) {
        return <p className="text-center">Проверка электронной почты ...</p>
    }

    return (
        <div className="space-y-4">
            {status === 'INVALID_TOKEN_ERROR' && (
                <p className="text-center text-sm">
                    Неверный токен подтверждения электронной почты. Возможно, он&nbsp;истек, в&nbsp;таком случае Вам
                    нужно повторить запрос на&nbsp;изменение электронной почты.
                </p>
            )}

            {status === 'OK' && <p className="text-center">Подтверждение электронной почты успешно завершено.</p>}

            <Button variant="outline" className="w-full" onClick={() => router.replace('/')}>
                На главную
            </Button>
        </div>
    )
}
