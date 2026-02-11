'use client'

import { RefObject, useRef, useState } from 'react'

import { BookmarkIcon, CircleUserIcon, MicIcon, SettingsIcon, StarIcon, UsersIcon } from 'lucide-react'
import { useOnClickOutside } from 'usehooks-ts'

import Link from 'next/link'

import { Search } from '@/components/features/common/search/search'
import { Keys } from '@/utils/enums/common'
import { useKeypress } from '@/utils/hooks/use-keypress'

import { HeaderLogin } from '../components/header-login'
import { NotificationsBell } from '../components/header-notifications-bell'
import { HeaderSubmitContent } from '../components/header-submit-content'
import { HeaderDesktopSignoutButton } from './components/header-desktop-signout-button'

type HeaderDesktopProps = {
    username: string | null
    isAuth: boolean
}

export const HeaderDesktop = ({ username, isAuth }: HeaderDesktopProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useOnClickOutside(ref as RefObject<HTMLDivElement>, () => setIsMenuOpen(false))
    useKeypress(Keys.ESCAPE, () => setIsMenuOpen(false))

    return (
        <div className="flex h-full flex-row items-center justify-between">
            <div className="flex h-full items-center justify-center gap-x-4 xl:gap-x-6">
                <Link href="/" className="relative flex h-full items-center gap-x-2 whitespace-nowrap text-white">
                    <MicIcon size={32} strokeWidth={2} />
                    <div className="text-[20px] leading-none font-extrabold uppercase">ComedyPortal</div>
                </Link>

                <Search />

                <nav className="flex items-center justify-center gap-x-3 text-sm xl:gap-x-4">
                    <Link
                        href="/top-special/2026"
                        className="rounded bg-[#46CE62] bg-[linear-gradient(rgba(70,206,98,.75),rgba(70,206,98,.4)),url('/images/top-entry-point-bg.png')] bg-cover bg-top bg-no-repeat px-2 py-1 font-bold text-nowrap text-white hover:text-white"
                    >
                        Топ спешлов
                    </Link>
                    <Link href="/content" className="font-bold text-nowrap text-gray-300 hover:text-white">
                        Контент
                    </Link>
                    <Link href="/comedians" className="font-bold text-nowrap text-gray-300 hover:text-white">
                        Комики
                    </Link>
                    <Link href="/blog" className="font-bold text-nowrap text-gray-300 hover:text-white">
                        Блог
                    </Link>
                    <Link href="/about" className="font-bold text-nowrap text-gray-300 hover:text-white">
                        О проекте
                    </Link>
                </nav>
            </div>

            <div className="relative flex items-center justify-center gap-x-3 text-sm xl:gap-x-4">
                <HeaderSubmitContent isAuth={isAuth} />
                {isAuth && username ? (
                    <>
                        <NotificationsBell />

                        <div className="relative" ref={ref}>
                            <div
                                onClick={() => setIsMenuOpen(prev => !prev)}
                                className="cursor-pointer text-gray-300 hover:text-white"
                            >
                                <CircleUserIcon />
                            </div>

                            {isMenuOpen && (
                                <div className="absolute top-full right-0 z-20 mt-1 flex w-48 flex-col gap-y-5 overflow-hidden rounded-lg border border-gray-100 bg-white py-5 shadow-md">
                                    <Link
                                        href={`/users/${username}`}
                                        className="flex cursor-pointer items-center gap-2 px-4 text-sm text-gray-600 hover:text-gray-950"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <StarIcon size={20} />
                                        Оценки и рецензии
                                    </Link>

                                    <Link
                                        href={`/users/${username}/watchlists`}
                                        className="flex cursor-pointer items-center gap-2 px-4 text-sm text-gray-600 hover:text-gray-950"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <BookmarkIcon size={20} />
                                        Избранное
                                    </Link>

                                    <Link
                                        href="/me/subscriptions"
                                        className="flex cursor-pointer items-center gap-2 px-4 text-sm text-gray-600 hover:text-gray-950"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <UsersIcon size={20} />
                                        Подписки
                                    </Link>

                                    <Link
                                        href="/me/settings"
                                        className="flex cursor-pointer items-center gap-2 px-4 text-sm text-gray-600 hover:text-gray-950"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <SettingsIcon size={20} />
                                        Настройки
                                    </Link>

                                    <hr className="border-gray-100" />

                                    <HeaderDesktopSignoutButton onClick={() => setIsMenuOpen(false)} />
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <HeaderLogin />
                )}
            </div>
        </div>
    )
}
