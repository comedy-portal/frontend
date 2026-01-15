'use client'

import { useState } from 'react'

import { verifyEmail } from 'supertokens-web-js/recipe/emailverification'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/forms/button'
import { useOnMountUnsafe } from '@/utils/hooks/use-on-mount-unsafe'

export const VerifyEmail = () => {
    const router = useRouter()
    const [status, setStatus] = useState<string>()

    useOnMountUnsafe(() => {
        const handleVerifyEmail = async () => {
            try {
                const response = await verifyEmail()
                setStatus(response.status)
            } catch (err) {
                console.error(err)
            }
        }
        handleVerifyEmail()
    })

    if (!status) {
        return <p className="text-center text-sm">Проверка электронной почты ...</p>
    }

    return (
        <div className="space-y-4">
            {status === 'EMAIL_VERIFICATION_INVALID_TOKEN_ERROR' && (
                <p className="text-center text-sm">
                    Похоже, что ссылка для подтверждения электронной почты недействительна или истекла. В этом случае
                    Вам нужно повторить запрос на изменение электронной почты.
                </p>
            )}

            {status === 'OK' && (
                <p className="text-center text-sm">Подтверждение электронной почты успешно завершено.</p>
            )}

            <Button variant="outline" className="w-full" onClick={() => router.replace('/')}>
                На главную
            </Button>
        </div>
    )
}
