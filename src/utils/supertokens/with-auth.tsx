import { ReactNode } from 'react'

import { redirect } from 'next/navigation'

import { getSSRSessionHelper } from '@/utils/supertokens/supertokens.utils'
import { TryRefreshComponent } from '@/utils/supertokens/try-refresh-component'

type OnUnauth = 'render' | 'notFound' | { redirectTo: string }

export async function withAuth<T = unknown>(options: {
    getAuthData?: () => Promise<T>
    onUnauth?: OnUnauth
    render: (props: { isAuth: boolean; data: T | null }) => ReactNode
}) {
    const { getAuthData, onUnauth = 'render', render } = options
    const { accessTokenPayload, hasToken } = await getSSRSessionHelper()

    if (!accessTokenPayload) {
        if (!hasToken) {
            if (onUnauth === 'notFound') {
                redirect('/404')
            }

            if (typeof onUnauth === 'object') {
                return redirect(onUnauth.redirectTo)
            }

            return render({ isAuth: false, data: null })
        }

        return <TryRefreshComponent key={Date.now()} />
    }

    const data = getAuthData ? await getAuthData() : null

    return render({ isAuth: true, data })
}
