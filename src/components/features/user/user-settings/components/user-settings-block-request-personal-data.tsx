'use client'

import { Confirmation } from '@/components/ui/confirmation'
import { ExternalLink } from '@/components/ui/external-link'
import { messages } from '@/messages'
import { userAPI } from '@/redux/services/user/user.api'
import { useDialog } from '@/utils/providers/dialog-provider'
import { useToast } from '@/utils/providers/toast-provider'

export const UserSettingsRequestPersonalData = () => {
    const dialog = useDialog()
    const toast = useToast()

    const [requestPersonalData] = userAPI.useRequestPersonalDataMutation()

    const handleRequestPersonalData = () => {
        dialog.open(
            <Confirmation
                title="Запрос персональных данных"
                message="Мы отправим копию Ваших персональных данных на электронную почту указанную при регистрации. Вы уверены, что хотите продолжить?"
                onConfirm={async () => {
                    try {
                        await requestPersonalData()
                        toast.success(
                            'Запрос персональных данных',
                            'Запрос успешно отправлен. Проверьте электронную почту.',
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
                <div className="text-lg font-bold">Персональные данные</div>
                <div
                    className="link cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-950"
                    onClick={handleRequestPersonalData}
                >
                    Запросить
                </div>
            </div>

            <div className="text-sm text-gray-500">
                Вы можете запросить копию персональных данных, которые мы храним. Это включает в себя любую информацию,
                которую Вы предоставили нам при регистрации, например, имя пользователя, адрес электронной почты и
                другие дополнительные сведения. Подробнее в нашей{' '}
                <ExternalLink href="/legal/privacy-policy" className="text-blue-500 hover:text-blue-700">
                    Политике конфиденциальности
                </ExternalLink>
                .
            </div>
        </div>
    )
}
