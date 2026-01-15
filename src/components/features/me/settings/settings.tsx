'use client'

import { useFormik } from 'formik'
import * as yup from 'yup'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/forms/button'
import { Input } from '@/components/ui/forms/input'
import { messages } from '@/messages'
import { userAPI } from '@/redux/services/user/user.api'
import { ChangeUserNameInputs } from '@/redux/services/user/user.types'
import { useToast } from '@/utils/providers/toast-provider'

import { SettingsBlockChangeEmail } from './components/settings-block-change-email'
import { SettingsRequestDeleteAccount } from './components/settings-request-delete-account'
import { SettingsRequestPersonalData } from './components/settings-request-personal-data'

type SettingsProps = {
    username: string
}

export const Settings = ({ username }: SettingsProps) => {
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
    })

    const initialValues: ChangeUserNameInputs = {
        username: username || '',
    }

    const handleSubmit = async (inputs: ChangeUserNameInputs) => {
        try {
            const trimmedInputs = {
                username: inputs.username.trim(),
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

                <div className="flex gap-x-2">
                    <Button type="submit" disabled={isLoading || !formik.dirty}>
                        Сохранить настройки
                    </Button>
                </div>
            </form>

            <div>
                <SettingsBlockChangeEmail />
                <SettingsRequestPersonalData />
                <SettingsRequestDeleteAccount />

                {/* <div className="flex flex-col gap-y-4 border-t border-gray-200 py-8 last:border-b">
                    <div className="flex items-center justify-between">
                        <div className="text-lg font-bold">Сессии</div>
                        <div
                            className="link cursor-pointer text-sm font-medium text-red-400 hover:text-red-500"
                            onClick={() => {}}
                        >
                            Выйти из всех сессий
                        </div>
                    </div>
                    <div className="text-sm text-gray-500">
                        Вы можете выйти из всех активных сессий, чтобы защитить свою учётную запись. Это полезно, если
                        Вы подозреваете, что кто-то получил доступ к Вашей учётной записи без Вашего разрешения.
                    </div>
                </div> */}
            </div>
        </div>
    )
}
