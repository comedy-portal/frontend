'use client'

import { LogOutIcon } from 'lucide-react'
import Session from 'supertokens-web-js/recipe/session'

import { useRouter } from 'next/navigation'

import { messages } from '@/messages'

export const UserSettingsLogout = () => {
    const router = useRouter()

    const signOut = async () => {
        try {
            await Session.signOut()
            router.push('/')
            router.refresh()
        } catch {
            console.error(messages.COMMON_ERROR)
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
