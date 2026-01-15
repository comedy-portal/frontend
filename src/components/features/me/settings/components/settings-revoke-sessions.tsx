'use client'
import Session from 'supertokens-web-js/recipe/session'

import { useRouter } from 'next/navigation'

import { Confirmation } from '@/components/ui/confirmation'
import { messages } from '@/messages'
import { userAPI } from '@/redux/services/user/user.api'
import { persistor } from '@/redux/store'
import { useDialog } from '@/utils/providers/dialog-provider'
import { useToast } from '@/utils/providers/toast-provider'

export const SettingsRevokeSessions = () => {
    const router = useRouter()
    const dialog = useDialog()
    const toast = useToast()

    const [revokeSessions] = userAPI.useRevokeSessionsMutation()

    const handleRevokeSessions = () => {
        dialog.open(
            <Confirmation
                title="Выйти из всех сессий"
                message="Вы уверены, что хотите выйти из всех активных сессий? Это действие потребует повторной аутентификации на всех устройствах."
                intent="danger"
                onConfirm={async () => {
                    try {
                        await revokeSessions()
                        await Session.signOut()
                        await persistor.purge()
                        router.push('/')
                        router.refresh()
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
                <div className="text-lg font-bold">Сессии</div>
                <div
                    className="cursor-pointer text-sm font-medium text-red-400 hover:text-red-500"
                    onClick={handleRevokeSessions}
                >
                    Выйти из всех сессий
                </div>
            </div>
            <div className="text-sm text-gray-500">
                Вы можете выйти из всех активных сессий, чтобы защитить свою учётную запись. Это полезно, если Вы
                подозреваете, что кто-то получил доступ к Вашей учётной записи без Вашего разрешения.
            </div>
        </div>
    )
}
