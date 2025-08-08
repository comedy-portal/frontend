'use client'

import { useState } from 'react'

import { MenuIcon, MicIcon, XIcon } from 'lucide-react'

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

            {isOpen ? (
                <XIcon className="text-gray-300" onClick={closeMobileMenu} />
            ) : (
                <MenuIcon className="text-gray-300" onClick={openMobileMenu} />
            )}

            {isOpen && <HeaderMobileMenu closeMobileMenu={closeMobileMenu} isAuth={isAuth} username={username} />}
        </div>
    )
}
