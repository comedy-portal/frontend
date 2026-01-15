'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/forms/button'
import { userAPI } from '@/redux/services/user/user.api'
import { useOnMountUnsafe } from '@/utils/hooks/use-on-mount-unsafe'

type RestoreProps = {
    token: string
}

export const Restore = ({ token }: RestoreProps) => {
    const router = useRouter()
    const [status, setStatus] = useState<string>()

    const [restoreUser, { isLoading }] = userAPI.useRestoreUserMutation()

    useOnMountUnsafe(() => {
        const handleConfirmDeletion = async () => {
            try {
                const response = await restoreUser({ token }).unwrap()
                setStatus(response.status)
            } catch (err) {
                console.error(err)
            }
        }
        handleConfirmDeletion()
    })

    if (!status) {
        return <p className="text-center text-sm">Пожалуйста подождите, мы восстанавливаем Ваш аккаунт...</p>
    }

    return (
        <div className="space-y-4">
            {status === 'INVALID_TOKEN_ERROR' && (
                <p className="text-center text-sm">
                    Похоже, что ссылка для восстановления аккаунта недействительна или истекла. Пожалуйста, попробуйте
                    снова запросить восстановление аккаунта.
                </p>
            )}

            {status === 'OK' && (
                <p className="text-center text-sm">
                    Ваш аккаунт успешно восстановлен. Вы можете войти, используя свои прежние учетные данные.
                </p>
            )}

            <Button variant="outline" className="w-full" disabled={isLoading} onClick={() => router.replace('/')}>
                На главную
            </Button>
        </div>
    )
}
