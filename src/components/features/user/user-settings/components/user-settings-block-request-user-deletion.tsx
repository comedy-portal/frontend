'use client'

import { Confirmation } from '@/components/ui/confirmation'
import { messages } from '@/messages'
import { userAPI } from '@/redux/services/user/user.api'
import { useDialog } from '@/utils/providers/dialog-provider'
import { useToast } from '@/utils/providers/toast-provider'

export const UserSettingsRequestUserDeletion = () => {
    const dialog = useDialog()
    const toast = useToast()

    const [requestUserDeletion] = userAPI.useRequestUserDeletionMutation()

    const handleRequestPersonalData = () => {
        dialog.open(
            <Confirmation
                title="Удаление аккаунта"
                message="Вы уверены, что хотите удалить свой аккаунт? Все данные будут безвозвратно удалены."
                onConfirm={async () => {
                    try {
                        await requestUserDeletion()
                        toast.success(
                            'Удаление аккаунта',
                            'Запрос на удаление аккаунта успешно отправлен. Проверьте электронную почту для подтверждения.',
                        )
                    } catch {
                        toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
                    } finally {
                        dialog.close()
                    }
                }}
            />,
        )
    }

    return (
        <div className="flex flex-col gap-y-4 border-t border-gray-200 py-8 last:border-b">
            <div className="flex items-center justify-between">
                <div className="text-lg font-bold">Аккаунт</div>
                <div
                    className="link cursor-pointer text-sm font-medium text-red-500 hover:text-red-600"
                    onClick={handleRequestPersonalData}
                >
                    Удалить
                </div>
            </div>

            <div className="text-sm text-gray-500">
                Вы&nbsp;можете запросить удаление своей учётной записи и&nbsp;всех связанных с&nbsp;ней данных.
                Вы&nbsp;сможете восстановить&nbsp;её, перейдя по&nbsp;ссылке, отправленной на&nbsp;Ваш адрес электронной
                почты до&nbsp;завершения процесса удаления.
            </div>
        </div>
    )
}
