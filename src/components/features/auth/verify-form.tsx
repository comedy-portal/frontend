'use client'

import { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'

import { ArrowLeftIcon } from 'lucide-react'
import * as yup from 'yup'

import { VerifyTimer } from '@/components/features/auth/verify-timer'
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
        <Form onSubmit={handleSubmit} noValidate className="flex flex-col gap-y-6 sm:w-104">
            <div>
                <h2 className="text-center text-2xl!">Код подтверждения</h2>
                <p className="text-center text-sm text-gray-500">
                    Мы отправили письмо с кодом подтверждения на
                    <br />
                    <strong>{email}</strong>
                </p>
            </div>

            {status && status !== 'OK' && (
                <Alert variant="danger" className="mb-0 text-sm">
                    {status === 'EXPIRED_USER_INPUT_CODE_ERROR' && 'Код подтверждения устарел'}
                    {status === 'INCORRECT_USER_INPUT_CODE_ERROR' && 'Неверный код подтверждения'}
                    {status === 'RESTART_FLOW_ERROR' && messages.COMMON_ERROR}
                    {status === 'SIGN_IN_UP_NOT_ALLOWED' && messages.COMMON_ERROR}
                </Alert>
            )}

            <Form.Group controlId="signUpEmail">
                <Form.Label className="flex! items-center justify-between">
                    Код
                    <VerifyTimer onResendOtp={onResendOtp} />
                </Form.Label>
                <Form.Control
                    type="otp"
                    name="otp"
                    value={otp}
                    placeholder="123456"
                    autoFocus
                    disabled={isLoading}
                    isInvalid={!!errors.otp}
                    onChange={e => setOtp(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">{errors.otp}</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-full" disabled={isLoading}>
                Подтвердить
            </Button>

            <div
                className="flex cursor-pointer items-center justify-center gap-x-1 text-sm text-gray-500 hover:text-gray-600"
                onClick={onBack}
            >
                <ArrowLeftIcon size={16} />
                Изменить email
            </div>
        </Form>
    )
}
