'use client'

import { useRouter } from 'next/navigation'

import { SignUp } from '@/components/features/auth/sign-up'
import { useDialog } from '@/utils/providers/dialog-provider'

type HeaderSubmitContentProps = {
    isAuth: boolean
}

export const FooterSubmitContent = ({ isAuth }: HeaderSubmitContentProps) => {
    const dialog = useDialog()
    const router = useRouter()

    const handleClick = () => {
        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }

        router.push('/content/submit')
    }

    return (
        <span className="cursor-pointer text-sm text-gray-500 hover:text-gray-950" onClick={handleClick}>
            Предложить контент
        </span>
    )
}
