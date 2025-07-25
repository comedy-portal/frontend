'use client'

import { PlusCircleIcon } from 'lucide-react'

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
        <div className="cursor-pointer text-gray-300 hover:text-white lg:flex-none" onClick={handleClick}>
            <div className="flex items-center justify-between lg:hidden">
                Предложить контент
                <div className="text-gray-700">
                    <PlusCircleIcon size={20} />
                </div>
            </div>

            <div className="hidden lg:block">
                <PlusCircleIcon />
            </div>
        </div>
    )
}
