'use client'

import SuperTokensAuth from 'supertokens-web-js'

import { config } from '@/utils/supertokens/config'

if (typeof window !== 'undefined') {
    // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
    SuperTokensAuth.init(config())
}

export const SuperTokensInit = ({ children }: { children: React.ReactNode }) => {
    return children
}
