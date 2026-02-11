'use client'

import { DialogProvider } from '@/components/providers/dialog-provider'
import { ReduxProvider } from '@/components/providers/redux-provider'
import { ToastProvider } from '@/components/providers/toast-provider'
import { SuperTokensInit } from '@/utils/supertokens/supertokens-init'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ReduxProvider>
            <SuperTokensInit>
                <ToastProvider>
                    <DialogProvider>{children}</DialogProvider>
                </ToastProvider>
            </SuperTokensInit>
        </ReduxProvider>
    )
}
