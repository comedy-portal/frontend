'use client'

import { useRouter } from 'next/navigation'

import { SignUp } from '@/components/features/auth/sign-up'
import { useOverlay } from '@/components/providers/overlay-provider'

type HeaderSubmitContentProps = {
    isAuth: boolean
}

export const FooterSubmitContent = ({ isAuth }: HeaderSubmitContentProps) => {
    const overlay = useOverlay()
    const router = useRouter()

    const handleClick = () => {
        if (!isAuth) {
            overlay.open(<SignUp />)
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
