'use client'

import { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'

import * as yup from 'yup'

import Link from 'next/link'

import { messages } from '@/messages'

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .trim()
        .required('Введите почту')
        .matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
            'Такой почты не существует',
        ),
})

type SignUpFormProps = {
    status?: string
    isLoading: boolean
    onSignUp: (formData: FormData) => void
}

export const SignUpForm = ({ status, isLoading, onSignUp }: SignUpFormProps) => {
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState<{ email?: string }>({})

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const formData = { email }

        try {
            await validationSchema.validate(formData, { abortEarly: false })
            setErrors({})

            const form = new FormData()
            form.append('email', email)

            onSignUp(form)
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
                <h2 className="text-center text-2xl!">Войти</h2>
                <p className="text-center text-xs text-gray-500 sm:m-auto sm:w-2/3">
                    Для этого укажите только электронную почту, мы отправим на нее данные для входа
                </p>
            </div>

            {status && status !== 'OK' && (
                <Alert variant="danger" className="mb-0 text-sm">
                    {messages.COMMON_ERROR}
                </Alert>
            )}

            <Form.Group controlId="signUpEmail">
                <Form.Label>Электронная почта</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    autoFocus
                    disabled={isLoading}
                    isInvalid={!!errors.email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-full" disabled={isLoading}>
                Продолжить
            </Button>

            <p className="text-center text-xs text-gray-500 sm:m-auto sm:w-3/4">
                Нажимая кнопку Продолжить, я подтверждаю, что ознакомился с{' '}
                <Link href="/legal/privacy-policy">Политикой конфиденциальности</Link> и{' '}
                <Link href="/legal/terms-of-service">Пользовательским соглашением</Link>
            </p>
        </Form>
    )
}
