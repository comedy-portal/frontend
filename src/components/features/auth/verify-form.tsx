'use client'

import { useState } from 'react'

import { ArrowLeftIcon } from 'lucide-react'
import * as yup from 'yup'

import { VerifyTimer } from '@/components/features/auth/verify-timer'
import { Button } from '@/components/ui/forms/button'
import { Input } from '@/components/ui/forms/input'
import { messages } from '@/messages'

const validationSchema = yup.object().shape({
    otp: yup
        .string()
        .trim()
        .matches(/^\d{6}$/, 'Введите корректный код подтверждения'),
})

type SignUpFormProps = {
    email: string
    status?: string
    isLoading: boolean
    onVerifyOtp: (formData: FormData) => void
    onResendOtp: () => void
    onBack: () => void
}

export const VerifyForm = ({ email, status, isLoading, onVerifyOtp, onResendOtp, onBack }: SignUpFormProps) => {
    const [otp, setOtp] = useState('')
    const [errors, setErrors] = useState<{ otp?: string }>({})

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const formData = { otp }

        try {
            await validationSchema.validate(formData, { abortEarly: false })
            setErrors({})

            const form = new FormData()
            form.append('otp', otp)

            onVerifyOtp(form)
        } catch (validationError) {
            if (validationError instanceof yup.ValidationError) {
                const newErrors: { [key: string]: string } = {}
                validationError.inner.forEach(err => {
                    if (err.path) newErrors[err.path] = err.message
                })
                setErrors(newErrors)
            }
        }
    }

    return (
        <form className="sm:w-104" onSubmit={handleSubmit}>
            <h1 className="mb-2 text-center text-lg font-semibold">Код подтверждения</h1>
            <p className="m-auto mb-8 text-center text-sm text-gray-500 sm:w-5/6">
                Мы отправили письмо с кодом подтверждения на
                <br />
                <strong>{email}</strong>
            </p>

            {status && status !== 'OK' && (
                <div className="mb-4 rounded-lg border border-red-100 bg-red-50 p-4 text-center text-sm text-red-500">
                    {status === 'EXPIRED_USER_INPUT_CODE_ERROR' && 'Код подтверждения устарел'}
                    {status === 'INCORRECT_USER_INPUT_CODE_ERROR' && 'Неверный код подтверждения'}
                    {status === 'RESTART_FLOW_ERROR' && messages.COMMON_ERROR}
                    {status === 'SIGN_IN_UP_NOT_ALLOWED' && messages.COMMON_ERROR}
                </div>
            )}

            <div className="mb-4">
                <div className="mb-2 flex items-center justify-between">
                    <label className="block text-sm font-semibold text-gray-700">Код</label>
                    <VerifyTimer onResendOtp={onResendOtp} />
                </div>
                <Input
                    type="text"
                    name="otp"
                    autoFocus
                    value={otp}
                    error={errors.otp}
                    disabled={isLoading}
                    onChange={e => setOtp(e.target.value)}
                />
            </div>

            <Button type="submit" className="mb-6 w-full" disabled={isLoading}>
                Подтвердить
            </Button>

            <div
                className="flex cursor-pointer items-center justify-center gap-x-1 text-sm text-gray-500 hover:text-gray-600"
                onClick={onBack}
            >
                <ArrowLeftIcon size={16} />
                Изменить email
            </div>
        </form>
    )
}
