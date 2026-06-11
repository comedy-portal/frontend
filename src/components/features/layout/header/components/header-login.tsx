'use client'

import { SignUp } from '@/components/features/auth/sign-up'
import { useOverlay } from '@/components/providers/overlay-provider'

type HeaderLoginProps = {
    onClick?: () => void
}

export const HeaderLogin = ({ onClick }: HeaderLoginProps) => {
    const overlay = useOverlay()

    const handleClick = () => {
        overlay.open(<SignUp />)
        onClick?.()
    }

    return (
        <button
            className="h-10 cursor-pointer rounded-lg bg-white px-4 text-sm font-bold text-gray-950 focus:outline-none lg:h-8"
            onClick={handleClick}
        >
            Войти
        </button>
    )
}
