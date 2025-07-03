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
        <div className="flex cursor-pointer items-center gap-x-2 text-white sm:text-sm" onClick={handleClick}>
            <LogInIcon size={16} />
            Войти
        </div>
    )
}
