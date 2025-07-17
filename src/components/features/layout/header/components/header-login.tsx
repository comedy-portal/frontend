'use client'

import { CircleUserRoundIcon } from 'lucide-react'

import { SignUp } from '@/components/features/auth/sign-up'
import { useDialog } from '@/utils/providers/dialog-provider'

type HeaderLoginProps = {
    onClick?: () => void
}

export const HeaderLogin = ({ onClick }: HeaderLoginProps) => {
    const dialog = useDialog()

    const handleClick = () => {
        dialog.open(<SignUp />)
        onClick?.()
    }

    return (
        <div
            className="flex cursor-pointer items-center justify-between text-gray-300 hover:text-white sm:flex-none"
            onClick={handleClick}
        >
            Войти
            <div className="text-gray-700 sm:hidden">
                <CircleUserRoundIcon size={20} />
            </div>
        </div>
    )
}
