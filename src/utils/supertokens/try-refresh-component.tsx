'use client'

import { useEffect, useState } from 'react'

import Session from 'supertokens-web-js/recipe/session'

import { useRouter } from 'next/navigation'

export const TryRefreshComponent = () => {
    const router = useRouter()
    const [didError, setDidError] = useState(false)

    useEffect(() => {
        void Session.attemptRefreshingSession()
            .then(hasSession => {
                if (hasSession) {
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

    return <div>Loading...</div>
}
