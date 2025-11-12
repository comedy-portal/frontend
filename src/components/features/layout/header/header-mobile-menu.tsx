'use client'

import {
    BookmarkIcon,
    ChevronRightIcon,
    CircleUserIcon,
    LogOutIcon,
    SettingsIcon,
    StarIcon,
    UsersIcon,
} from 'lucide-react'
import Session from 'supertokens-web-js/recipe/session'
import { useScrollLock } from 'usehooks-ts'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Search } from '@/components/features/layout/search/search'
import { messages } from '@/messages'
import { useToast } from '@/utils/providers/toast-provider'

import { HeaderLogin } from './components/header-login'
import { HeaderSubmitContent } from './components/header-submit-content'

type HeaderMobileMenuProps = {
    closeMobileMenu: () => void
    isAuth: boolean
    username: string | null
}

export const HeaderMobileMenu = ({ closeMobileMenu, isAuth, username }: HeaderMobileMenuProps) => {
    const router = useRouter()
    const toast = useToast()

    useScrollLock()

    const handleSignOut = async () => {
        try {
            await Session.signOut()
            closeMobileMenu()
            router.push('/')
            router.refresh()
        } catch {
            toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
        }
    }

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
                {isAuth && username ? (
                    <>
                        <div className="text-base≈ flex items-center gap-x-2">
                            <CircleUserIcon className="shrink-0" />
                            {username}
                        </div>
                        <Link
                            href={`/users/${username}`}
                            className="flex items-center justify-between"
                            onClick={closeMobileMenu}
                        >
                            Оценки и рецензии
                            <div className="text-gray-700">
                                <StarIcon size={20} />
                            </div>
                        </Link>
                        <Link
                            href={`/users/${username}/watchlists`}
                            className="flex items-center justify-between"
                            onClick={closeMobileMenu}
                        >
                            Избранное
                            <div className="text-gray-700">
                                <BookmarkIcon size={20} />
                            </div>
                        </Link>
                        <Link
                            href="/me/subscriptions"
                            className="flex items-center justify-between"
                            onClick={closeMobileMenu}
                        >
                            Подписки
                            <div className="text-gray-700">
                                <UsersIcon size={20} />
                            </div>
                        </Link>
                        <Link
                            href="/me/settings"
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
                    <>
                        <HeaderSubmitContent isAuth={isAuth} onClick={closeMobileMenu} />
                        <HeaderLogin onClick={closeMobileMenu} />
                    </>
                )}

                {isAuth && (
                    <>
                        <hr className="border-gray-700" />
                        <HeaderSubmitContent isAuth={isAuth} onClick={closeMobileMenu} />
                        <button onClick={handleSignOut} className="flex items-center justify-between">
                            Выйти
                            <div className="text-gray-700">
                                <LogOutIcon size={20} />
                            </div>
                        </button>
                    </>
                )}
            </nav>
        </div>
    )
}
