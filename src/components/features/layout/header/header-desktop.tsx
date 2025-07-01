import Link from 'next/link'

import { HeaderProfileEntryPoint } from './header-profile-entry-point'
import { Logo } from './header-search/header-logo'
import { HeaderSearch } from './header-search/header-search'

export const HeaderDesktop = () => {
    return (
        <div className="flex h-full flex-row items-center justify-between">
            <div className="flex h-full items-center justify-center gap-x-8">
                <Logo className="text-white" />
                <HeaderSearch />

                <nav className="flex items-center justify-center gap-x-4 text-sm">
                    <Link href="/content" className="text-nowrap text-white hover:underline">
                        Контент
                    </Link>
                    <Link href="/comedians" className="text-nowrap text-white hover:underline">
                        Комики
                    </Link>
                    <Link href="/about" className="text-nowrap text-white hover:underline">
                        О проекте
                    </Link>
                </nav>
            </div>

            <HeaderProfileEntryPoint />
        </div>
    )
}
