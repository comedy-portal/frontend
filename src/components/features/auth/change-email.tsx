'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button } from '@/components/ui/forms/button'
import { Input } from '@/components/ui/forms/input'
import { messages } from '@/messages'
import { userAPI } from '@/redux/services/user/user.api'
import { RequestUserEmailChangeInputs } from '@/redux/services/user/user.types'
import { useDialog } from '@/utils/providers/dialog-provider'
import { useToast } from '@/utils/providers/toast-provider'

export const ChangeEmail = () => {
    const dialog = useDialog()
    const toast = useToast()

    const [changeUserEmail, { isLoading }] = userAPI.useRequestUserEmailChangeMutation()

    const initialValues = {
        newEmail: '',
    }

    const validationSchema = Yup.object().shape({
        newEmail: Yup.string()
            .trim()
            .required('Введите почту')
            .matches(
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
                'Введите почту',
            ),
    })

    const handleSubmit = async (inputs: RequestUserEmailChangeInputs) => {
        try {
            const response = await changeUserEmail({ newEmail: inputs.newEmail.trim() }).unwrap()

            switch (response.status) {
                case 'EMAIL_ALREADY_EXISTS_ERROR':
                    formik.setErrors({ newEmail: 'Этот адрес электронной почты уже используется.' })
                    break

                case 'OK':
                    toast.success(
                        'Изменение электронной почты',
                        'Проверьте свою почту для подтверждения нового адреса.',
                    )
                    dialog.close()
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
        <form className="sm:w-104" onSubmit={formik.handleSubmit}>
            <h1 className="mb-2 text-center text-lg font-semibold">Изменить электронную почту</h1>
            <p className="m-auto mb-8 text-center text-sm text-gray-500 sm:w-3/4">
                Укажите новый адрес электронной почты, который Вы хотите использовать для входа в систему и получения
                уведомлений.
            </p>

            <div className="mb-4">
                <label className="mb-2 block text-sm font-semibold text-gray-700">Электронная почта</label>
                <Input
                    type="text"
                    name="newEmail"
                    autoFocus
                    value={formik.values.newEmail}
                    error={formik.errors.newEmail}
                    disabled={isLoading}
                    onChange={formik.handleChange}
                />
            </div>

            <Button type="submit" className="mb-4 w-full" disabled={isLoading}>
                Продолжить
            </Button>
        </form>
    )
}
