'use client'

import { Button } from '@/components/ui/forms/button'
import { Keys } from '@/utils/enums/common'
import { useKeypress } from '@/utils/hooks/use-keypress'
import { useDialog } from '@/utils/providers/dialog-provider'

type ConfirmationResultProps = {
    title: string
    message: string
}

export const ConfirmationResult = ({ title, message }: ConfirmationResultProps) => {
    const dialog = useDialog()

    useKeypress(Keys.ENTER, () => {
        dialog.close()
    })

    return (
        <div className="w-full sm:w-104">
            <div className="mb-8 flex flex-col gap-y-4">
                <h1 className="text-lg font-semibold">{title}</h1>
                <hr className="border-gray-400" />
                <p>{message}</p>
            </div>

            <Button variant="outline" onClick={() => dialog.close()}>
                Закрыть
            </Button>
        </div>
    )
}
