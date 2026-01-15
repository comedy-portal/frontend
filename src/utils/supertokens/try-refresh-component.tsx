'use client'

import { useEffect, useState } from 'react'

import Session from 'supertokens-web-js/recipe/session'

import { useRouter } from 'next/navigation'

import { GlobalLoading } from '@/components/ui/global-loading'

export const TryRefreshComponent = () => {
    const router = useRouter()
    const [didError, setDidError] = useState(false)

    useEffect(() => {
        void Session.attemptRefreshingSession()
            .then(async success => {
                if (success) {
                    router.refresh()
                } else {
                    await Session.signOut()
                    router.push('/')
                    router.refresh()
                }
            })
            .catch(() => {
                setDidError(true)
            })
    }, [router])

    if (didError) {
        return <div>Something went wrong, please reload the page</div>
    }

    return <GlobalLoading />
}
