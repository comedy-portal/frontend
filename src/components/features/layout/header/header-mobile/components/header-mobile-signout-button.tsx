'use client'

import { LogOutIcon } from 'lucide-react'
import Session from 'supertokens-web-js/recipe/session'

import { useRouter } from 'next/navigation'

import { useToast } from '@/components/providers/toast-provider'
import { messages } from '@/messages'

type HeaderMobileSignoutButtonProps = {
    onClick: () => void
}

export const HeaderMobileSignoutButton = ({ onClick }: HeaderMobileSignoutButtonProps) => {
    const router = useRouter()
    const toast = useToast()

    const handleSignOut = async () => {
        try {
            await Session.signOut()
            onClick()
            router.push('/')
            router.refresh()
        } catch {
            toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
        }
    }

    return (
        <button onClick={handleSignOut} className="flex items-center justify-between px-2 font-bold">
            Выйти
            <div className="text-gray-700">
                <LogOutIcon size={20} />
            </div>
        </button>
    )
}
