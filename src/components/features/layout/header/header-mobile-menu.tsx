'use client'

import { ChevronRightIcon, CircleUserRoundIcon, SettingsIcon } from 'lucide-react'
import { useScrollLock } from 'usehooks-ts'

import Link from 'next/link'

import { Search } from '@/components/features/layout/search/search'

import { HeaderLogin } from './components/header-login'
import { HeaderSubmitContent } from './components/header-submit-content'

type HeaderMobileMenuProps = {
    closeMobileMenu: () => void
    isAuth: boolean
    username?: string
}

export const HeaderMobileMenu = ({ closeMobileMenu, isAuth, username }: HeaderMobileMenuProps) => {
    useScrollLock()

    return (
        <div className="wrapper absolute top-full right-0 left-0 flex h-screen flex-col gap-y-6 bg-gray-950 py-3">
            <Search closeMobileMenu={closeMobileMenu} />

            <nav className="flex flex-col gap-y-4 text-sm text-gray-300">
                <Link href="/top-special/2025" className="flex items-center justify-between" onClick={closeMobileMenu}>
                    Топ
                    <div className="text-gray-700">
                        <ChevronRightIcon size={20} />
                    </div>
                </Link>
                <Link href="/content" className="flex items-center justify-between" onClick={closeMobileMenu}>
                    Контент
                    <div className="text-gray-700">
                        <ChevronRightIcon size={20} />
                    </div>
                </Link>
                <Link href="/comedians" className="flex items-center justify-between" onClick={closeMobileMenu}>
                    Комики
                    <div className="text-gray-700">
                        <ChevronRightIcon size={20} />
                    </div>
                </Link>
                <Link href="/comedians/groups" className="flex items-center justify-between" onClick={closeMobileMenu}>
                    Группы
                    <div className="text-gray-700">
                        <ChevronRightIcon size={20} />
                    </div>
                </Link>
                <Link href="/about" className="flex items-center justify-between" onClick={closeMobileMenu}>
                    О проекте
                    <div className="text-gray-700">
                        <ChevronRightIcon size={20} />
                    </div>
                </Link>
            </nav>

            <hr className="border-gray-700" />

            <nav className="flex flex-col gap-y-4 text-sm text-gray-300">
                {isAuth ? (
                    <>
                        <Link
                            href={`/users/${username}`}
                            className="flex items-center justify-between"
                            onClick={closeMobileMenu}
                        >
                            Мой профиль
                            <div className="text-gray-700">
                                <CircleUserRoundIcon size={20} />
                            </div>
                        </Link>
                        <Link
                            href={`/users/${username}/settings`}
                            className="flex items-center justify-between"
                            onClick={closeMobileMenu}
                        >
                            Настройки
                            <div className="text-gray-700">
                                <SettingsIcon size={20} />
                            </div>
                        </Link>
                    </>
                ) : (
                    <HeaderLogin onClick={closeMobileMenu} />
                )}

                <HeaderSubmitContent isAuth={isAuth} onClick={closeMobileMenu} />
            </nav>
        </div>
    )
}
