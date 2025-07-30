'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/forms/button'
import { messages } from '@/messages'
import { userAPI } from '@/redux/services/user/user.api'
import { useOnMountUnsafe } from '@/utils/hooks/use-on-mount-unsafe'
import { useToast } from '@/utils/providers/toast-provider'

type RestoreUserProps = {
    token: string
}

export const RestoreUser = ({ token }: RestoreUserProps) => {
    const toast = useToast()
    const router = useRouter()

    const [status, setStatus] = useState<string>()
    const [restoreUser] = userAPI.useRestoreUserMutation()

    useOnMountUnsafe(() => {
        const handleRestoreUser = async () => {
            try {
                const response = await restoreUser(token).unwrap()
                setStatus(response.status)
            } catch {
                toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
            }
        }
        handleRestoreUser()
    })

    if (!status) {
        return <p className="text-center text-sm">Восстановление вашей учетной записи ...</p>
    }

    return (
        <div className="space-y-4">
            {status === 'OK' && (
                <p className="text-center text-sm">
                    Ваша учетная запись успешно восстановлена. Вы можете войти в систему, используя свои учетные данные.
                </p>
            )}

            {status === 'INVALID_TOKEN_ERROR' && (
                <p className="text-center text-sm">
                    Срок действия ссылки для подтверждения истек. Пожалуйста, повторите запрос на&nbsp;восстановление
                    аккаунта.
                </p>
            )}

            <Button variant="outline" className="w-full" onClick={() => router.replace('/')}>
                На главную
            </Button>
        </div>
    )
}
