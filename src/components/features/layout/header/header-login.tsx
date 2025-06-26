'use client'

import { LogInIcon } from 'lucide-react'

import { SignUp } from '@/components/features/auth/sign-up'
import { toggleMobileMenu } from '@/redux/features/app-slice'
import { useAppDispatch } from '@/redux/hooks'
import { useDialog } from '@/utils/providers/dialog-provider'

export const HeaderLogin = () => {
    const dispatch = useAppDispatch()
    const dialog = useDialog()

    const handleClick = () => {
        dialog.open(<SignUp />)
        dispatch(toggleMobileMenu(false))
    }

    return (
        <div className="flex cursor-pointer items-center gap-x-2 text-white sm:text-sm" onClick={handleClick}>
            <LogInIcon size={16} />
            Войти
        </div>
    )
}
