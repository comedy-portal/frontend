'use client'

import { useDispatch } from 'react-redux'

import { LogOutIcon } from 'lucide-react'
import Session from 'supertokens-web-js/recipe/session'

import { useRouter } from 'next/navigation'

import { messages } from '@/messages'
import { api } from '@/redux/services/api'

export const UserSettingsLogout = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const signOut = async () => {
        try {
            await Session.signOut()
            dispatch(api.util.resetApiState())
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
