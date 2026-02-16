'use client'

import { useDetectUserCountry } from '@/utils/hooks/use-detect-user-country'

export function AppBootstrap() {
    useDetectUserCountry()
    return null
}
