import { SendIcon } from 'lucide-react'

import Link from 'next/link'

export const TGBanner = () => {
    return (
        <div className="bg-gray-800 bg-[radial-gradient(circle_at_14%_24%,var(--color-gray-700)_0,var(--color-gray-700)_18px,transparent_19px),radial-gradient(circle_at_86%_26%,var(--color-gray-700)_0,var(--color-gray-700)_12px,transparent_13px),radial-gradient(circle_at_18%_78%,var(--color-gray-700)_0,var(--color-gray-700)_10px,transparent_11px),radial-gradient(circle_at_82%_74%,var(--color-gray-700)_0,var(--color-gray-700)_24px,transparent_25px)] bg-no-repeat py-10">
            <div className="wrapper flex flex-col text-center">
                <p className="m-auto mb-3 max-w-2xl text-center text-xl leading-7 font-bold tracking-[-0.4px] text-white sm:text-2xl">
                    Будьте в&nbsp;курсе всех обновлений на Камеди Портал
                </p>

                <p className="m-auto mb-5 max-w-2xl text-sm leading-5 text-gray-200 sm:text-base sm:leading-6">
                    Подписывайтесь на&nbsp;наш Telegram-канал, чтобы первыми узнавать о&nbsp;новых функциях, релизах
                    и&nbsp;важных обновлениях портала.
                </p>

                <div>
                    <Link
                        href="https://t.me/comedyportal"
                        className="inline-flex h-10 w-full items-center justify-center gap-x-2 rounded-lg border border-gray-100 bg-white px-6 text-sm font-bold text-nowrap text-gray-950 hover:border-white hover:bg-gray-100 sm:w-auto"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SendIcon size={18} className="text-gray-950" strokeWidth={2} />
                        Подписаться
                    </Link>
                </div>
            </div>
        </div>
    )
}
