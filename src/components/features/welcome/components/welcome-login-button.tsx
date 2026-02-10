'use client'

import Link from 'next/link'

import { SignUp } from '@/components/features/auth/sign-up'
import { useDialog } from '@/utils/providers/dialog-provider'

type WelcomeLoginButtonProps = {
    caption: string
    href: string
    isAuth: boolean
}

export const WelcomeLoginButton = ({ caption, href, isAuth }: WelcomeLoginButtonProps) => {
    const dialog = useDialog()

    const handleClick = () => {
        dialog.open(<SignUp />)
    }

    return isAuth ? (
        <Link href={href} className="text-blue-500 hover:text-blue-700">
            {caption}
        </Link>
    ) : (
        <button onClick={handleClick} className="cursor-pointer text-blue-500 hover:text-blue-700 hover:outline-none">
            {caption}
        </button>
    )
}
