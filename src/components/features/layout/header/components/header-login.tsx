'use client'

import { LogInIcon } from 'lucide-react'

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
        <div className="cursor-pointer hover:text-white sm:text-sm sm:text-gray-200" onClick={handleClick}>
            Войти
        </div>
    )
}
