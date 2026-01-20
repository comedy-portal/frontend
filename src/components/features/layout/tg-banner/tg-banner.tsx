'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const TGBanner = () => {
    const router = useRouter()

    return (
        <div className="bg-gray-700 py-8 sm:py-16">
            <div className="wrapper">
                <div className="m-auto space-y-8 text-center sm:w-2/3">
                    <p className="text-lg font-bold text-white">
                        Будьте в&nbsp;курсе всех изменений на&nbsp;<strong>Камеди портал</strong>! Подписывайтесь
                        на&nbsp;наш Telegram-канал и&nbsp;получайте новости о&nbsp;новых функциях и&nbsp;обновлениях.
                    </p>
                    <Link
                        href="https://t.me/comedyportal"
                        className="inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-lg border border-white px-6 font-bold text-nowrap text-white sm:w-auto"
                        target="_blank"
                    >
                        Подписаться
                    </Link>
                </div>
            </div>
        </div>
    )
}
