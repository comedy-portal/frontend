'use client'

import { useRouter } from 'next/navigation'

import { SignUp } from '@/components/features/auth/sign-up'
import { useDialog } from '@/utils/providers/dialog-provider'

type HeaderContentProposalProps = {
    isAuth: boolean
    onClick?: () => void
}

export const HeaderContentProposal = ({ isAuth, onClick }: HeaderContentProposalProps) => {
    const dialog = useDialog()
    const router = useRouter()

    const handleClick = () => {
        onClick?.()

        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }

        router.push('/content/proposal')
    }

    return (
        <div className="cursor-pointer text-gray-200 hover:text-white" onClick={handleClick}>
            Предложить контент
        </div>
    )
}
