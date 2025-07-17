'use client'

import { useState } from 'react'

import { ChevronRightIcon, CircleUserRoundIcon, MenuIcon, MicIcon, XIcon } from 'lucide-react'

import Link from 'next/link'

import { Search } from '@/components/features/layout/search/search'

import { HeaderLogin } from './components/header-login'
import { HeaderSubmitContent } from './components/header-submit-content'

type HeaderMobileProps = {
    username?: string
    isAuth: boolean
}

export const HeaderMobile = ({ username, isAuth }: HeaderMobileProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const openMobileMenu = () => {
        setIsOpen(true)
    }

    const closeMobileMenu = () => {
        setIsOpen(false)
    }

    return (
        <div className="flex h-full items-center justify-between">
            <Link href="/" className="relative flex h-full items-center gap-x-2 whitespace-nowrap text-white">
                <MicIcon size={28} strokeWidth={2} />
                <div>
                    <div className="mb-0.5 text-[10px] leading-none font-semibold text-white">Альфа</div>
                    <div className="text-[16px] leading-none font-extrabold uppercase">ComedyPortal</div>
                </div>
            </Link>

            {isOpen ? (
                <XIcon className="text-gray-300" onClick={closeMobileMenu} />
            ) : (
                <MenuIcon className="text-gray-300" onClick={openMobileMenu} />
            )}

            {isOpen && (
                <div className="wrapper-lg absolute top-full right-0 left-0 flex h-screen flex-col gap-y-6 bg-gray-950 py-3">
                    <Search closeMobileMenu={closeMobileMenu} />

                    <nav className="flex flex-col gap-y-4 text-sm text-gray-300">
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
                            <Link
                                href={`/users/${username}`}
                                className="flex items-center justify-between"
                                onClick={closeMobileMenu}
                            >
                                {username}
                                <div className="text-gray-700">
                                    <CircleUserRoundIcon size={20} />
                                </div>
                            </Link>
                        ) : (
                            <HeaderLogin onClick={closeMobileMenu} />
                        )}
                        <HeaderSubmitContent isAuth={isAuth} onClick={closeMobileMenu} />
                    </nav>
                </div>
            )}
        </div>
    )
}
