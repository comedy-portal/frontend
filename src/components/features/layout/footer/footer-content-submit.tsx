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
        <span className="cursor-pointer text-sm hover:text-white" onClick={handleClick}>
            Предложить контент
        </span>
    )
}
