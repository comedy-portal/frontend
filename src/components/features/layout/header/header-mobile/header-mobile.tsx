'use client'

import { useState } from 'react'

import { MenuIcon, XIcon } from 'lucide-react'

import { NotificationsBell } from '../components/header-notifications-bell'
import { HeaderMobileLogo } from './components/header-mobile-logo'
import { HeaderMobileMenu } from './components/header-mobile-menu'

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
            <HeaderMobileLogo closeMobileMenu={closeMobileMenu} />

            <div className="flex items-center gap-x-4">
                {isAuth && username && <NotificationsBell closeMobileMenu={closeMobileMenu} />}

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
