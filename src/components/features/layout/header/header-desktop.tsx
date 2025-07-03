import { CircleUserRoundIcon } from 'lucide-react'

import Link from 'next/link'

import { HeaderLogin } from './components/header-login'
import { Logo } from './components/header-search/header-logo'
import { HeaderSearch } from './components/header-search/header-search'

type HeaderDesktopProps = {
    username?: string
    isAuth: boolean
}

export const HeaderDesktop = ({ username, isAuth }: HeaderDesktopProps) => {
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

            {isAuth ? (
                <Link
                    href={`/users/${username}`}
                    className="flex items-center gap-x-2 text-sm text-white hover:underline"
                >
                    {username}
                    <CircleUserRoundIcon strokeWidth={1} />
                </Link>
            ) : (
                <HeaderLogin />
            )}
        </div>
    )
}
