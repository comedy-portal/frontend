'use client'

import Session from 'supertokens-web-js/recipe/session'

import { useRouter } from 'next/navigation'

import { messages } from '@/messages'

export const UserLogout = () => {
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
        <span className="cursor-pointer text-red-500" onClick={signOut}>
            Выйти
        </span>
    )
}
