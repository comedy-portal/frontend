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
        <div className="flex items-center gap-x-2 text-red-500 hover:underline" onClick={signOut}>
            {/* <LogOutIcon strokeWidth={1.5} /> */}
            Выйти
        </div>
    )
}
