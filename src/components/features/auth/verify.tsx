'use client'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { clearLoginAttemptInfo, consumeCode, resendCode } from 'supertokens-web-js/recipe/passwordless'

import { useRouter } from 'next/navigation'

import { api } from '@/redux/services/api'
import { useDialog } from '@/utils/providers/dialog-provider'

import { VerifyForm } from './verify-form'

type VerifyProps = {
    email: string
    onBack: () => void
}

export const Verify = ({ email, onBack }: VerifyProps) => {
    const router = useRouter()
    const dialog = useDialog()
    const dispatch = useDispatch()
    const [status, setStatus] = useState<string>()
    const [isLoading, setIsLoading] = useState(false)

    const handleVerifyOtp = async (formData: FormData) => {
        setIsLoading(true)
        try {
            const otp = formData.get('otp') as string
            const response = await consumeCode({ userInputCode: otp })
            setStatus(response.status)

            if (response.status === 'OK') {
                await clearLoginAttemptInfo()
                dispatch(api.util.resetApiState())
                dialog.close()

                if (response.createdNewRecipeUser) {
                    router.push('/welcome')
                } else {
                    router.refresh()
                }
            }
        } catch {
            setStatus('GENERAL_ERROR')
        } finally {
            setIsLoading(false)
        }
    }

    const handleResendOtp = async () => {
        setIsLoading(true)
        try {
            const response = await resendCode()
            setStatus(response.status)
        } catch {
            setStatus('GENERAL_ERROR')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <VerifyForm
            email={email}
            status={status}
            isLoading={isLoading}
            onVerifyOtp={handleVerifyOtp}
            onResendOtp={handleResendOtp}
            onBack={onBack}
        />
    )
}
