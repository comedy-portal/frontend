'use client'
import { LogOutIcon } from 'lucide-react'
import Session from 'supertokens-web-js/recipe/session'

import { useRouter } from 'next/navigation'

import { messages } from '@/messages'
import { useToast } from '@/utils/providers/toast-provider'

type HeaderDesktopSignoutButtonProps = {
    onClick: () => void
}

export const HeaderDesktopSignoutButton = ({ onClick }: HeaderDesktopSignoutButtonProps) => {
    const toast = useToast()
    const router = useRouter()

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
        <button
            onClick={handleSignOut}
            className="flex cursor-pointer items-center gap-2 px-4 text-sm text-gray-600 hover:text-gray-950 focus:outline-none"
        >
            <LogOutIcon size={20} />
            Выйти
        </button>
    )
}
