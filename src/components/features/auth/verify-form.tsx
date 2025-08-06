'use client'

import { useRef, useState } from 'react'

import classNames from 'classnames'
import { ArrowLeftIcon } from 'lucide-react'
import * as yup from 'yup'

import { VerifyTimer } from '@/components/features/auth/verify-timer'
import { Button } from '@/components/ui/forms/button'
import { messages } from '@/messages'

const CODE_LENGTH = 6

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
    const [otpValues, setOtpValues] = useState<string[]>(Array(CODE_LENGTH).fill(''))
    const [errors, setErrors] = useState<{ otp?: string }>({})
    const inputsRef = useRef<(HTMLInputElement | null)[]>([])

    const focusInput = (index: number) => {
        if (inputsRef.current[index]) {
            inputsRef.current[index]?.focus()
        }
    }

    const handleChange = (index: number, value: string) => {
        if (!/^\d?$/.test(value)) return

        const updatedValues = [...otpValues]
        updatedValues[index] = value
        setOtpValues(updatedValues)

        if (value && index < CODE_LENGTH - 1) {
            focusInput(index + 1)
        }
    }

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const pastedData = e.clipboardData.getData('Text').replace(/\D/g, '').slice(0, CODE_LENGTH)
        if (pastedData.length === 0) return

        const newOtp = [...otpValues]
        for (let i = 0; i < CODE_LENGTH; i++) {
            newOtp[i] = pastedData[i] || ''
        }
        setOtpValues(newOtp)

        const nextEmpty = newOtp.findIndex(char => !char)
        if (nextEmpty !== -1) {
            focusInput(nextEmpty)
        } else {
            focusInput(CODE_LENGTH - 1)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
            focusInput(index - 1)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const otp = otpValues.join('')
        try {
            await validationSchema.validate({ otp }, { abortEarly: false })
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

    const handleResendOtp = async () => {
        setErrors({})
        onResendOtp()
        setOtpValues(Array(CODE_LENGTH).fill(''))
        focusInput(0)
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
                    {(status === 'RESTART_FLOW_ERROR' || status === 'SIGN_IN_UP_NOT_ALLOWED') &&
                        messages.COMMON_ERROR_MESSAGE}
                </div>
            )}

            <div className="mb-4">
                <div className="mb-2 flex items-center justify-between">
                    <label className="block text-sm font-semibold text-gray-700">Код</label>
                    <VerifyTimer onResendOtp={handleResendOtp} />
                </div>

                <div className="flex items-center justify-between sm:gap-x-2">
                    {Array.from({ length: CODE_LENGTH }).map((_, i) => (
                        <input
                            key={i}
                            ref={el => {
                                inputsRef.current[i] = el
                            }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={otpValues[i]}
                            disabled={isLoading}
                            className={classNames(
                                'size-10 rounded-lg border text-center text-lg disabled:cursor-no-drop disabled:opacity-30 sm:size-12',
                                {
                                    'border-red-500': errors.otp,
                                    'border-gray-300 hover:border-gray-400 focus:border-gray-400': !errors.otp,
                                },
                                'focus:ring-2 focus:ring-blue-500 focus:outline-none',
                            )}
                            onChange={e => handleChange(i, e.target.value)}
                            onPaste={handlePaste}
                            onKeyDown={e => handleKeyDown(e, i)}
                        />
                    ))}
                </div>
                {errors.otp && <p className="mt-1 text-xs text-red-500">{errors.otp}</p>}
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
