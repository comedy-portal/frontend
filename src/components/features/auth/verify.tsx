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

    const parseSupertokensError = async (err: unknown) => {
        let statusCode: number | undefined
        let message: string | undefined

        try {
            if (err instanceof Response) {
                const data = await err.json()
                statusCode = data.statusCode
                message = data.message
            } else if (typeof err === 'object' && err !== null) {
                statusCode = (err as any)?.statusCode
                message = (err as any)?.message
            }
        } catch (parseErr) {
            console.error('Failed to parse error response', parseErr)
        }

        return { statusCode, message }
    }

    const handleVerifyOtp = async (formData: FormData) => {
        setIsLoading(true)
        try {
            const otp = formData.get('otp') as string
            const response = await consumeCode({ userInputCode: otp })
            setStatus(response.status)

            if (response.status === 'OK') {
                await clearLoginAttemptInfo()
                dispatch(api.util.resetApiState())

                if (response.createdNewRecipeUser) {
                    router.push('/welcome')
                }

                router.refresh()
                dialog.close()
            }
        } catch (err: unknown) {
            const { statusCode, message } = await parseSupertokensError(err)

            if (statusCode === 403 && message === 'USER_DEACTIVATED') {
                setStatus('USER_DEACTIVATED')
            } else {
                setStatus('GENERAL_ERROR')
            }
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
