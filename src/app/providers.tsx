'use client'

import { OverlayProvider } from '@/components/providers/overlay-provider'
import { ReduxProvider } from '@/components/providers/redux-provider'
import { ToastProvider } from '@/components/providers/toast-provider'
import { SuperTokensInit } from '@/utils/supertokens/supertokens-init'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ReduxProvider>
            <SuperTokensInit>
                <ToastProvider>
                    <OverlayProvider>{children}</OverlayProvider>
                </ToastProvider>
            </SuperTokensInit>
        </ReduxProvider>
    )
}
