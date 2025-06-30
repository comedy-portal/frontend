import { ReactNode } from 'react'

import { XIcon } from 'lucide-react'
import { useScrollLock } from 'usehooks-ts'

type DialogProps = {
    content: ReactNode
    onClose: () => void
}

export const Dialog = ({ content, onClose }: DialogProps) => {
    useScrollLock()

    return (
        <div className="fixed top-0 right-0 bottom-0 left-0 z-50 overflow-y-auto p-4 sm:p-16">
            <div className="fixed top-0 right-0 bottom-0 left-0 z-40 bg-black opacity-75" />
            <div className="flex min-h-full items-center justify-center">
                <div className="relative z-50 w-full rounded-2xl bg-white p-8 shadow-lg sm:w-auto sm:p-16">
                    <div className="hover-animated absolute top-4 right-3 cursor-pointer sm:right-4" onClick={onClose}>
                        <XIcon className="text-gray-500 hover:text-black" />
                    </div>
                    {content}
                </div>
            </div>
        </div>
    )
}
