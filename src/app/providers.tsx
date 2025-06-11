'use client'

import { ReactNode } from 'react'

import { ReduxProvider } from '@/redux/provider'
import { DialogProvider } from '@/utils/providers/dialog-provider'
import { SuperTokensInit } from '@/utils/supertokens/supertokens-init'

export function Providers({ children }: { children: ReactNode }) {
    return (
        <ReduxProvider>
            <SuperTokensInit>
                <DialogProvider>{children}</DialogProvider>
            </SuperTokensInit>
        </ReduxProvider>
    )
}
