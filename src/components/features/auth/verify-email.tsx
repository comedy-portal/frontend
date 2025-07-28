'use client'

import { useState } from 'react'

import { verifyEmail } from 'supertokens-web-js/recipe/emailverification'

import { useOnMountUnsafe } from '@/utils/hooks/use-on-mount-unsafe'

export const VerifyEmail = () => {
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
        return <p className="text-center">Пожалуйста, подождите...</p>
    }

    return (
        <>
            <p className="text-center">
                {status === 'EMAIL_VERIFICATION_INVALID_TOKEN_ERROR' &&
                    'Неверный токен подтверждения электронной почты.'}

                {status === 'OK' && 'Подтверждение электронной почты успешно.'}
            </p>
            {/* <Button href="/" className="w-full">
                Вернуться на главную
            </Button> */}
        </>
    )
}
