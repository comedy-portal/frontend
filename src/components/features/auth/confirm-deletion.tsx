'use client'

import { useState } from 'react'

import Session from 'supertokens-web-js/recipe/session'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/forms/button'
import { userAPI } from '@/redux/services/user/user.api'
import { persistor } from '@/redux/store'
import { useOnMountUnsafe } from '@/utils/hooks/use-on-mount-unsafe'

type ConfirmDeletionProps = {
    token: string
}

export const ConfirmDeletion = ({ token }: ConfirmDeletionProps) => {
    const router = useRouter()
    const [status, setStatus] = useState<string>()

    const [confirmUserDeletion, { isLoading }] = userAPI.useConfirmUserDeletionMutation()
    const [revokeSessions] = userAPI.useRevokeSessionsMutation()

    useOnMountUnsafe(() => {
        const handleConfirmDeletion = async () => {
            try {
                const response = await confirmUserDeletion({ token }).unwrap()
                setStatus(response.status)
                await revokeSessions()
                await Session.signOut()
            } catch (err) {
                console.error(err)
            }
        }
        handleConfirmDeletion()
    })

    if (!status) {
        return <p className="text-center text-sm">Пожалуйста подождите, мы удаляем Ваш аккаунт...</p>
    }

    return (
        <div className="space-y-4">
            {status === 'INVALID_TOKEN_ERROR' && (
                <p className="text-center text-sm">
                    Похоже, что ссылка для удаления аккаунта недействительна или истекла. Пожалуйста, попробуйте снова
                    запросить удаление аккаунта.
                </p>
            )}

            {status === 'OK' && (
                <p className="text-center text-sm">
                    Мы начали процесс удаления Вашего аккаунта. Он может занять до нескольких дней. Пока удаление не
                    завершено, Вы можете восстановить аккаунт по ссылке из письма, отправленного на Ваш адрес
                    электронной почты.
                </p>
            )}

            <Button variant="outline" className="w-full" disabled={isLoading} onClick={() => router.replace('/')}>
                На главную
            </Button>
        </div>
    )
}
