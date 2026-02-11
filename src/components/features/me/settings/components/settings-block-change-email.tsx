'use client'

import { ChangeEmail } from '@/components/features/auth/change-email'
import { useDialog } from '@/components/providers/dialog-provider'

export const SettingsBlockChangeEmail = () => {
    const dialog = useDialog()

    const handleChangeEmail = () => {
        dialog.open(<ChangeEmail />)
    }

    return (
        <div className="flex flex-col gap-y-4 border-t border-gray-200 py-8 last:border-b">
            <div className="flex items-center justify-between">
                <div className="text-lg font-bold">Электронная почта</div>
                <div
                    className="link cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-950"
                    onClick={handleChangeEmail}
                >
                    Изменить
                </div>
            </div>
            <div className="text-sm text-gray-500">
                Ваш адрес электронной почты используется для входа в систему и получения уведомлений.
            </div>
        </div>
    )
}
