'use client'

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
        <div className="cursor-pointer text-gray-200 hover:text-white" onClick={handleClick}>
            Предложить контент
        </div>
    )
}
