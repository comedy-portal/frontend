'use client'

import { RefObject, useRef, useState } from 'react'

import { CircleUserIcon, MicIcon } from 'lucide-react'
import Session from 'supertokens-web-js/recipe/session'
import { useOnClickOutside } from 'usehooks-ts'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Search } from '@/components/features/layout/search/search'
import { messages } from '@/messages'
import { Keys } from '@/utils/enums/common'
import { useKeypress } from '@/utils/hooks/use-keypress'
import { useToast } from '@/utils/providers/toast-provider'

import { HeaderLogin } from './components/header-login'
import { HeaderSubmitContent } from './components/header-submit-content'

type HeaderDesktopProps = {
    username: string | null
    isAuth: boolean
}

export const HeaderDesktop = ({ username, isAuth }: HeaderDesktopProps) => {
    const toast = useToast()
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useOnClickOutside(ref as RefObject<HTMLDivElement>, () => setIsMenuOpen(false))

    useKeypress(Keys.ESCAPE, () => setIsMenuOpen(false))

    const handleSignOut = async () => {
        try {
            await Session.signOut()
            setIsMenuOpen(false)
            router.push('/')
            router.refresh()
        } catch {
            toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
        }
    }

    return (
        <div className="flex h-full flex-row items-center justify-between">
            <div className="flex h-full items-center justify-center gap-x-4 xl:gap-x-6">
                <Link href="/" className="relative flex h-full items-center gap-x-2 whitespace-nowrap text-white">
                    <MicIcon size={32} strokeWidth={2} />
                    <div>
                        <div className="mb-0.5 text-[12px] leading-none font-semibold text-white">Альфа</div>
                        <div className="text-[18px] leading-none font-extrabold uppercase">ComedyPortal</div>
                    </div>
                </Link>

                <Search />

                <nav className="flex items-center justify-center gap-x-3 text-sm xl:gap-x-4">
                    <Link href="/top-special/2025" className="text-nowrap text-gray-300 hover:text-white">
                        Топ
                    </Link>
                    <Link href="/content" className="text-nowrap text-gray-300 hover:text-white">
                        Контент
                    </Link>
                    <Link href="/comedians" className="text-nowrap text-gray-300 hover:text-white">
                        Комики
                    </Link>
                    <Link href="/comedians/groups" className="text-nowrap text-gray-300 hover:text-white">
                        Группы
                    </Link>
                    <Link href="/about" className="text-nowrap text-gray-300 hover:text-white">
                        О проекте
                    </Link>
                </nav>
            </div>

            <div className="relative flex items-center justify-center gap-x-3 text-sm xl:gap-x-4">
                <HeaderSubmitContent isAuth={isAuth} />
                {isAuth && username ? (
                    <div className="relative" ref={ref}>
                        <button
                            onClick={() => setIsMenuOpen(prev => !prev)}
                            className="cursor-pointer align-top text-gray-300 hover:text-white"
                        >
                            <CircleUserIcon />
                        </button>

                        {isMenuOpen && (
                            <div className="absolute top-full right-0 z-20 mt-1 w-48 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                                <Link
                                    href={`/users/${username}`}
                                    className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-950"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Мой профиль
                                </Link>

                                <Link
                                    href={`/users/${username}/watchlists`}
                                    className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-950"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Моё избранное
                                </Link>

                                <Link
                                    href={`/users/${username}/settings`}
                                    className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-950"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Настройки
                                </Link>

                                <div
                                    onClick={handleSignOut}
                                    className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-950"
                                >
                                    Выйти
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <HeaderLogin />
                )}
            </div>
        </div>
    )
}
