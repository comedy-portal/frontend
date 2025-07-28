'use client'

import { ReduxProvider } from '@/redux/provider'
import { DialogProvider } from '@/utils/providers/dialog-provider'
import { ToastProvider } from '@/utils/providers/toast-provider'
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
