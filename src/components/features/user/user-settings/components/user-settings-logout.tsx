'use client'

import { LogOutIcon } from 'lucide-react'
import Session from 'supertokens-web-js/recipe/session'

import { useRouter } from 'next/navigation'

import { messages } from '@/messages'
import { useToast } from '@/utils/providers/toast-provider'

export const UserSettingsLogout = () => {
    const toast = useToast()
    const router = useRouter()

    const signOut = async () => {
        try {
            await Session.signOut()
            router.push('/')
            router.refresh()
        } catch {
            toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
        }
    }

    return (
        <div>
            <div
                className="inline-flex cursor-pointer items-center gap-x-2 text-red-500 hover:text-red-700"
                onClick={signOut}
            >
                <LogOutIcon size={16} />
                Выйти
            </div>
        </div>
    )
}
