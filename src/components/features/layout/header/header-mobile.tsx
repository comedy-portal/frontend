'use client'

import { useState } from 'react'

import { MenuIcon, MicIcon, XIcon } from 'lucide-react'

import Link from 'next/link'

import { NotificationsBell } from './components/header-notifications-bell'
import { HeaderMobileMenu } from './header-mobile-menu'

type HeaderMobileProps = {
    username: string | null
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
            <Link
                href="/"
                className="relative flex h-full items-center gap-x-2 whitespace-nowrap text-white"
                onClick={closeMobileMenu}
            >
                <MicIcon size={28} strokeWidth={2} />
                <div className="text-[20px] leading-none font-extrabold uppercase">ComedyPortal</div>
            </Link>

            <div className="flex items-center gap-x-4">
                {isAuth && username && <NotificationsBell />}

                {isOpen ? (
                    <XIcon className="text-gray-300" onClick={closeMobileMenu} />
                ) : (
                    <MenuIcon className="text-gray-300" onClick={openMobileMenu} />
                )}

                {isOpen && <HeaderMobileMenu closeMobileMenu={closeMobileMenu} isAuth={isAuth} username={username} />}
            </div>
        </div>
    )
}
