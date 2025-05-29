import Link from 'next/link'

import { Logo } from '@/components/ui/logo'

import { HeaderProfileEntryPoint } from './header-profile-entry-point'

export const HeaderDesktop = () => {
    return (
        <div className="flex flex-row items-center justify-between">
            <div className="flex items-center justify-center gap-x-8">
                <Logo className="text-white" />

                <nav className="flex items-center justify-center gap-x-4 text-sm">
                    <Link href="/content" className="text-white no-underline! hover:underline!">
                        Контент
                    </Link>
                    <Link href="/comedians" className="text-white no-underline! hover:underline!">
                        Комики
                    </Link>
                    <Link href="/about" className="text-white no-underline! hover:underline!">
                        О проекте
                    </Link>
                </nav>
            </div>

            <HeaderProfileEntryPoint />
        </div>
    )
}
