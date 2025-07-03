'use client'

import { useState } from 'react'

import { CircleUserRoundIcon, MenuIcon, XIcon } from 'lucide-react'

import Link from 'next/link'

import { HeaderLogin } from './components/header-login'
import { Logo } from './components/header-search/header-logo'

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
            <Logo className="text-white" />

            {isOpen ? (
                <XIcon className="text-white" onClick={closeMobileMenu} />
            ) : (
                <MenuIcon className="text-white" onClick={openMobileMenu} />
            )}

            {isOpen && (
                <nav className="absolute top-14 right-0 left-0 flex h-screen flex-col gap-y-3 bg-black p-3 text-white">
                    <Link href="/content" className="text-white" onClick={closeMobileMenu}>
                        Контент
                    </Link>
                    <Link href="/comedians" className="text-white" onClick={closeMobileMenu}>
                        Комики
                    </Link>
                    <Link href="/about" className="text-white" onClick={closeMobileMenu}>
                        О проекте
                    </Link>

                    <hr className="my-2 border-gray-500" />

                    {isAuth ? (
                        <Link
                            href={`/users/${username}`}
                            className="flex items-center gap-x-2 text-white hover:underline"
                            onClick={closeMobileMenu}
                        >
                            <CircleUserRoundIcon strokeWidth={1} />
                            {username}
                        </Link>
                    ) : (
                        <HeaderLogin onClick={closeMobileMenu} />
                    )}
                </nav>
            )}
        </div>
    )
}
