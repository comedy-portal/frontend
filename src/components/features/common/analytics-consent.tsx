'use client'

import { GoogleAnalytics } from '@next/third-parties/google'

import YandexMetrika from '@/components/features/common/yandex-metrika'
import { getIsAnalyticsAccepted } from '@/utils/redux/features/user-slice'
import { useAppSelector } from '@/utils/redux/hooks'
import { internalApi } from '@/utils/redux/services/internal/internal.api'

export const AnalyticsConsent = () => {
    const isAnalyticsAccepted = useAppSelector(getIsAnalyticsAccepted)

    const { data, isLoading } = internalApi.useGetEdgeGeoQuery(undefined, { skip: !isAnalyticsAccepted })

    if (!isAnalyticsAccepted || isLoading) {
        return null
    }

    const isRuUser = data?.countryCode?.toUpperCase() === 'RU'
    const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    const shouldLoadGoogleAnalytics = Boolean(gaId && gaId !== 'SHOULD_BE_SET' && !isRuUser)

    return (
        <>
            {shouldLoadGoogleAnalytics && <GoogleAnalytics gaId={gaId as string} />}
            <YandexMetrika />
        </>
    )
}
