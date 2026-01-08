'use client'

import { CookieIcon } from 'lucide-react'

import Link from 'next/link'

import { Button } from '@/components/ui/forms/button'
import { getIsCookieAccepted, setCookieAccepted } from '@/redux/features/user-slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

export const CookieConsent = () => {
    const dispatch = useAppDispatch()
    const isCookieAccepted = useAppSelector(getIsCookieAccepted)

    if (isCookieAccepted) {
        return null
    }

    return (
        <div className="fixed bottom-0 z-50 bg-gray-950 p-4 text-white sm:bottom-8 sm:left-1/2 sm:w-145 sm:-translate-x-1/2 sm:transform sm:rounded-lg">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex gap-x-3 text-sm">
                    <CookieIcon className="hidden shrink-0 sm:block" />
                    <p>
                        Мы&nbsp;обрабатываем cookies, чтобы сделать наш сайт удобнее. Подробнее в&nbsp;
                        <Link href="/legal/privacy-policy" className="text-blue-300 hover:text-blue-400">
                            политике конфиденциальности
                        </Link>
                        .
                    </p>
                </div>
                <Button size="sm" className="w-full sm:w-auto" onClick={() => dispatch(setCookieAccepted())}>
                    Принять
                </Button>
            </div>
        </div>
    )
}
