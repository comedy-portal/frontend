'use client'

import { Button } from '@/components/ui/forms/button'
import { Keys } from '@/utils/enums/common'
import { useKeypress } from '@/utils/hooks/use-keypress'
import { useDialog } from '@/utils/providers/dialog-provider'

type ConfirmationProps = {
    title: string
    message: string

    onConfirm: () => void
}

export const Confirmation = ({ title, message, onConfirm }: ConfirmationProps) => {
    const dialog = useDialog()

    useKeypress(Keys.ENTER, () => {
        onConfirm()
    })

    return (
        <div className="w-full sm:w-104">
            <div className="mb-8 flex flex-col gap-y-4">
                <h1 className="text-lg font-semibold">{title}</h1>
                <hr className="border-gray-400" />
                <p>{message}</p>
            </div>
            <div className="flex gap-x-2">
                <Button onClick={onConfirm}>Да, я уверен</Button>
                <Button variant="outline" onClick={() => dialog.close()}>
                    Отмена
                </Button>
            </div>
        </div>
    )
}
