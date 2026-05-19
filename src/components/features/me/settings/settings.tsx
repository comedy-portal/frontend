'use client'

import { useFormik } from 'formik'
import * as yup from 'yup'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useToast } from '@/components/providers/toast-provider'
import { Button } from '@/components/ui/forms/button'
import { Checkbox } from '@/components/ui/forms/checkbox'
import { Input } from '@/components/ui/forms/input'
import { messages } from '@/messages'
import { userAPI } from '@/utils/redux/services/user/user.api'
import { ChangeUserNameInputs } from '@/utils/redux/services/user/user.types'

import { SettingsBlockChangeEmail } from './components/settings-block-change-email'
import { SettingsRequestDeleteAccount } from './components/settings-request-delete-account'
import { SettingsRequestPersonalData } from './components/settings-request-personal-data'
import { SettingsRevokeSessions } from './components/settings-revoke-sessions'

type SettingsProps = {
    username: string
    initialNewsletterConsent?: boolean
}

export const Settings = ({ username, initialNewsletterConsent = false }: SettingsProps) => {
    const toast = useToast()
    const router = useRouter()

    const [changeUsername, { isLoading }] = userAPI.useChangeUsernameMutation()

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .trim()
            .min(2, 'Минимальная длина имени пользователя 2 символа')
            .max(25, 'Максимальная длина имени пользователя 25 символов')
            .matches(
                /^[a-zA-Z0-9_-]+$/,
                'Имя пользователя может содержать только латинские буквы, цифры и символы подчеркивания и дефиса',
            )
            .required('Имя пользователя обязательно'),
        newsletterConsent: yup.boolean().required(),
    })

    const initialValues: ChangeUserNameInputs = {
        username: username || '',
        newsletterConsent: initialNewsletterConsent,
    }

    const handleSubmit = async (inputs: ChangeUserNameInputs) => {
        try {
            const trimmedInputs = {
                username: inputs.username.trim(),
                newsletterConsent: inputs.newsletterConsent,
            }
            const response = await changeUsername(trimmedInputs).unwrap()

            switch (response.status) {
                case 'OK':
                    formik.resetForm({ values: trimmedInputs })
                    router.refresh()
                    toast.success('Имя пользователя успешно изменено')
                    break

                case 'USERNAME_ALREADY_EXISTS_ERROR':
                    formik.setErrors({ username: 'Это имя пользователя уже занято' })
                    break

                default:
                    toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
                    break
            }
        } catch {
            toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
        }
    }

    const formik = useFormik({
        initialValues,
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema,
        onSubmit: handleSubmit,
    })

    return (
        <div className="flex flex-col gap-y-8">
            <form className="flex flex-col gap-y-8 sm:w-1/2" onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-y-2">
                    <label className="text-sm font-semibold text-gray-700">Имя пользователя</label>
                    <Input
                        name="username"
                        autoFocus
                        value={formik.values.username}
                        error={formik.errors.username}
                        disabled={isLoading}
                        onChange={formik.handleChange}
                    />
                </div>

                <Checkbox
                    name="newsletterConsent"
                    checked={formik.values.newsletterConsent}
                    disabled={isLoading}
                    className="text-sm text-gray-600"
                    onChange={formik.handleChange}
                >
                    <span className="text-sm text-gray-600">
                        Получать новости, подборки и&nbsp;важные обновления Камеди Портал по&nbsp;email. Согласие
                        добровольное, подробнее в{' '}
                        <Link href="/legal/newsletter-consent" className="text-blue-500 hover:text-blue-700">
                            согласии на&nbsp;получение рассылок
                        </Link>
                        .
                    </span>
                </Checkbox>

                <div className="flex gap-x-2">
                    <Button type="submit" className="w-full sm:w-auto" disabled={isLoading || !formik.dirty}>
                        Сохранить настройки
                    </Button>
                </div>
            </form>

            <div>
                <SettingsBlockChangeEmail />
                <SettingsRequestPersonalData />
                <SettingsRevokeSessions />
                <SettingsRequestDeleteAccount />
            </div>
        </div>
    )
}
