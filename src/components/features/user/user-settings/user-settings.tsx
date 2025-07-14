'use client'

import { useFormik } from 'formik'
import * as yup from 'yup'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/forms/button'
import { Input } from '@/components/ui/forms/input'
import { messages } from '@/messages'
import { userAPI } from '@/redux/services/user/user.api'
import { ChangeUserNameInputs } from '@/redux/services/user/user.types'

type UserSettingsProps = {
    username: string
}

export const UserSettings = ({ username }: UserSettingsProps) => {
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
            changeUsername(trimmedInputs)
            router.replace(`/users/${trimmedInputs.username}/settings`)
            router.refresh()
        } catch {
            console.error(messages.COMMON_ERROR)
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
    )
}
