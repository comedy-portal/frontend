'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/forms/button'
import {
    acceptAnalyticsCookies,
    acceptNecessaryCookies,
    getIsCookieConsentAnswered,
} from '@/utils/redux/features/user-slice'
import { useAppDispatch, useAppSelector } from '@/utils/redux/hooks'

export const CookieBanner = () => {
    const dispatch = useAppDispatch()
    const isCookieConsentAnswered = useAppSelector(getIsCookieConsentAnswered)

    if (isCookieConsentAnswered) {
        return null
    }

    return (
        <div className="fixed bottom-0 z-45 bg-gray-950 p-4 text-white sm:bottom-8 sm:left-1/2 sm:w-160 sm:-translate-x-1/2 sm:transform sm:rounded-lg">
            <div className="flex flex-col gap-4">
                <p className="text-sm">
                    Мы&nbsp;используем необходимые cookies для работы сайта. Аналитика включается только по&nbsp;Вашему
                    согласию. Подробнее в&nbsp;
                    <Link href="/legal/cookie-policy" className="text-blue-300 hover:text-blue-400">
                        политике cookies
                    </Link>
                    .
                </p>
                <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                    <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-white text-white hover:bg-white hover:text-gray-950 sm:w-auto"
                        onClick={() => dispatch(acceptNecessaryCookies())}
                    >
                        Только необходимые
                    </Button>
                    <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-white text-white hover:bg-white hover:text-gray-950 sm:w-auto"
                        onClick={() => dispatch(acceptAnalyticsCookies())}
                    >
                        Разрешить аналитику
                    </Button>
                </div>
            </div>
        </div>
    )
}
