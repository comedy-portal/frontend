'use client'

import { useState } from 'react'

import * as yup from 'yup'

import Link from 'next/link'

import { Button } from '@/components/ui/forms/button'
import { Checkbox } from '@/components/ui/forms/checkbox'
import { Input } from '@/components/ui/forms/input'
import { messages } from '@/messages'

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .trim()
        .required('Введите почту')
        .matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
            'Введите почту',
        ),
    personalDataConsent: yup
        .boolean()
        .oneOf([true], 'Чтобы продолжить, нужно принять соглашение и дать согласие на обработку данных'),
    newsletterConsent: yup.boolean(),
})

type SignUpFormProps = {
    status?: string
    isLoading: boolean
    onSignUp: (formData: FormData) => void
}

export const SignUpForm = ({ status, isLoading, onSignUp }: SignUpFormProps) => {
    const [email, setEmail] = useState('')
    const [personalDataConsent, setPersonalDataConsent] = useState(false)
    const [newsletterConsent, setNewsletterConsent] = useState(false)
    const [errors, setErrors] = useState<{ email?: string; personalDataConsent?: string }>({})

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const formData = { email, personalDataConsent, newsletterConsent }

        try {
            await validationSchema.validate(formData, { abortEarly: false })
            setErrors({})

            const form = new FormData()
            form.append('email', email)
            form.append('personalDataConsent', String(personalDataConsent))
            form.append('newsletterConsent', String(newsletterConsent))

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
        <form className="sm:w-104" onSubmit={handleSubmit}>
            <h1 className="mb-2 text-center text-lg font-semibold">Войти</h1>
            <p className="m-auto mb-8 text-center text-sm text-gray-500 sm:w-3/4">
                Для этого укажите только электронную почту, мы отправим на неё данные для входа
            </p>

            {status && status !== 'OK' && (
                <div className="mb-4 rounded-lg border border-red-100 bg-red-50 p-4 text-center text-sm text-red-500">
                    {messages.COMMON_ERROR_MESSAGE}
                </div>
            )}

            <div className="mb-4">
                <label className="mb-2 block text-sm font-semibold text-gray-700">Электронная почта</label>
                <Input
                    type="text"
                    name="email"
                    autoFocus
                    value={email}
                    error={errors.email}
                    disabled={isLoading}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <Button type="submit" className="mb-4 w-full" disabled={isLoading}>
                Продолжить
            </Button>

            <div className="space-y-3 text-xs text-gray-500">
                <Checkbox
                    checked={personalDataConsent}
                    disabled={isLoading}
                    onChange={e => setPersonalDataConsent(e.target.checked)}
                >
                    Я принимаю{' '}
                    <Link href="/legal/terms-of-use" className="text-blue-500">
                        Пользовательское соглашение
                    </Link>{' '}
                    и даю{' '}
                    <Link href="/legal/personal-data-consent" className="text-blue-500">
                        согласие на обработку персональных данных
                    </Link>
                    .
                </Checkbox>

                {errors.personalDataConsent && <div className="text-xs text-red-500">{errors.personalDataConsent}</div>}

                <Checkbox
                    checked={newsletterConsent}
                    disabled={isLoading}
                    onChange={e => setNewsletterConsent(e.target.checked)}
                >
                    Хочу получать новости и обновления Камеди Портал по email. Согласие добровольное, подробнее в{' '}
                    <Link href="/legal/newsletter-consent" className="text-blue-500">
                        согласии на рассылки
                    </Link>
                    .
                </Checkbox>

                <p>
                    Подробнее об обработке данных см. в{' '}
                    <Link href="/legal/privacy-policy" className="text-blue-500">
                        Политике обработки персональных данных
                    </Link>
                    .
                </p>
            </div>
        </form>
    )
}
