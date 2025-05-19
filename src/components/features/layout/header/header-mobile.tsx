'use client'

import { ReactNode, useState } from 'react'

import { MenuIcon, XIcon } from 'lucide-react'

import Link from 'next/link'

import { Logo } from '@/components/ui/logo'

type HeaderMobileProps = {
    profileEntryPointComponent: ReactNode
}

export const HeaderMobile = ({ profileEntryPointComponent }: HeaderMobileProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className="flex items-center justify-between">
            <Logo className="text-white" />

            {isOpen ? (
                <XIcon className="text-white" onClick={toggleMenu} />
            ) : (
                <MenuIcon className="text-white" onClick={toggleMenu} />
            )}

            {isOpen && (
                <nav className="absolute top-full right-0 left-0 flex flex-col items-end gap-y-3 bg-black p-3 text-white">
                    <Link href="/content" className="text-white no-underline! hover:underline!" onClick={toggleMenu}>
                        Контент
                    </Link>
                    <Link href="/comedians" className="text-white no-underline! hover:underline!" onClick={toggleMenu}>
                        Комики
                    </Link>
                    {profileEntryPointComponent}
                </nav>
            )}
        </div>
    )
}
