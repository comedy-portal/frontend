'use client'

import { MessageCircleIcon } from 'lucide-react'

import { useRouter } from 'next/navigation'

import { SignUp } from '@/components/features/auth/sign-up'
import { useDialog } from '@/utils/providers/dialog-provider'

type HeaderSubmitContentProps = {
    isAuth: boolean
    onClick?: () => void
}

export const HeaderSubmitContent = ({ isAuth, onClick }: HeaderSubmitContentProps) => {
    const dialog = useDialog()
    const router = useRouter()

    const handleClick = () => {
        onClick?.()

        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }

        router.push('/content/submit')
    }

    return (
        <div
            className="flex cursor-pointer items-center justify-between text-gray-300 hover:text-white sm:flex-none"
            onClick={handleClick}
        >
            Предложить контент
            <div className="text-gray-700 sm:hidden">
                <MessageCircleIcon size={20} />
            </div>
        </div>
    )
}
