'use client'

import { LogOutIcon } from 'lucide-react'
import Session from 'supertokens-web-js/recipe/session'

import { useRouter } from 'next/navigation'

import { messages } from '@/messages'

export const HeaderLogout = () => {
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
        <div className="flex cursor-pointer items-center gap-x-2 text-white sm:text-sm" onClick={signOut}>
            <LogOutIcon size={16} className="hidden sm:block" />
            Выйти
        </div>
    )
}
