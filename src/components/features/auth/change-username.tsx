'use client'

import { useFormik } from 'formik'
import * as yup from 'yup'

import { useRouter } from 'next/navigation'

import { CommonError } from '@/components/ui/common-error'
import { Button } from '@/components/ui/forms/button'
import { Input } from '@/components/ui/forms/input'
import { messages } from '@/messages'
import { userAPI } from '@/redux/services/user/user.api'
import { ChangeUserNameInputs } from '@/redux/services/user/user.types'
import { useDialog } from '@/utils/providers/dialog-provider'
import { useToast } from '@/utils/providers/toast-provider'

export const ChangeUsername = () => {
    const router = useRouter()
    const dialog = useDialog()
    const toast = useToast()

    const { data, isSuccess, isError } = userAPI.useGetUserDataQuery()
    const [changeUsername, { isLoading }] = userAPI.useChangeUsernameMutation()

    const initialValues: ChangeUserNameInputs = {
        username: data?.username || '',
    }

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

    const handleSubmit = async (inputs: ChangeUserNameInputs) => {
        try {
            const trimmedInputs = {
                username: inputs.username.trim(),
            }
            const response = await changeUsername(trimmedInputs).unwrap()

            switch (response.status) {
                case 'OK':
                    toast.success('Имя пользователя успешно изменено')
                    router.refresh()
                    dialog.close()
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
        enableReinitialize: true,
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema,
        onSubmit: handleSubmit,
    })

    if (isError) {
        return <CommonError />
    }

    return (
        <form className="sm:w-104" onSubmit={formik.handleSubmit}>
            <h1 className="mb-2 text-center text-lg font-semibold">Выберите имя для профиля</h1>
            <p className="m-auto mb-8 text-center text-sm text-gray-500 sm:w-3/4">
                Мы&nbsp;выдали Вам имя по&nbsp;умолчанию. Измените его на&nbsp;уникальное&nbsp;&mdash; профиль будет
                выглядеть лучше и&nbsp;станет заметнее для других пользователей.
            </p>

            <div className="mb-4">
                <label className="mb-2 block text-sm font-semibold text-gray-700">Имя пользователя</label>
                <Input
                    type="text"
                    name="username"
                    autoFocus
                    value={formik.values.username}
                    error={formik.errors.username}
                    disabled={isLoading || !isSuccess || !data.username}
                    onChange={formik.handleChange}
                />
            </div>

            <Button type="submit" className="mb-4 w-full" disabled={isLoading || !isSuccess || !data.username}>
                Сохранить
            </Button>
        </form>
    )
}
