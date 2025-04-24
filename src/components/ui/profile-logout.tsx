'use client'

import { LogOutIcon } from 'lucide-react'
import Session from 'supertokens-web-js/recipe/session'

import { useRouter } from 'next/navigation'

import { messages } from '@/messages'

export const ProfileLogout = () => {
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
        <div className="flex items-center gap-x-2 text-sm text-black" onClick={signOut}>
            <LogOutIcon size={16} />
            Выйти
        </div>
    )
}
