'use client'

import { MenuIcon, XIcon } from 'lucide-react'

import Link from 'next/link'

import { getIsMobileMenuOpen, toggleMobileMenu } from '@/redux/features/app-slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

import { Logo } from './header-search/header-logo'

type HeaderMobileProps = {
    profileEntryPointComponent: React.ReactNode
}

export const HeaderMobile = ({ profileEntryPointComponent }: HeaderMobileProps) => {
    const isMobileMenuOpen = useAppSelector(getIsMobileMenuOpen)
    const dispatch = useAppDispatch()

    const openMobileMenu = () => {
        dispatch(toggleMobileMenu(true))
    }

    const closeMobileMenu = () => {
        dispatch(toggleMobileMenu(false))
    }

    return (
        <div className="flex h-full items-center justify-between">
            <Logo className="text-white" />

            {isMobileMenuOpen ? (
                <XIcon className="text-white" onClick={closeMobileMenu} />
            ) : (
                <MenuIcon className="text-white" onClick={openMobileMenu} />
            )}

            {isMobileMenuOpen && (
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

                    <hr />

                    {profileEntryPointComponent}
                </nav>
            )}
        </div>
    )
}
