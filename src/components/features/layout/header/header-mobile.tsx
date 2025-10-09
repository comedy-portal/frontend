'use client'

import { useState } from 'react'

import { BellIcon, MenuIcon, MicIcon, XIcon } from 'lucide-react'

import Link from 'next/link'

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
            <Link href="/" className="relative flex h-full items-center gap-x-2 whitespace-nowrap text-white">
                <MicIcon size={28} strokeWidth={2} />
                <div>
                    <div className="mb-0.5 text-[10px] leading-none font-semibold text-white">Альфа</div>
                    <div className="text-[16px] leading-none font-extrabold uppercase">ComedyPortal</div>
                </div>
            </Link>

            <div className="flex items-center gap-x-4">
                <Link href="/me/notifications" className="relative cursor-pointer text-gray-300 hover:text-white">
                    <BellIcon />
                    <div className="absolute top-0 right-0 box-content size-2 rounded-full border-2 border-gray-950 bg-red-500" />
                </Link>

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
