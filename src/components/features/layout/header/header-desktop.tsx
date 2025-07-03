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
                    <Link href="/content" className="text-nowrap text-gray-200 hover:text-white">
                        Контент
                    </Link>
                    <Link href="/comedians" className="text-nowrap text-gray-200 hover:text-white">
                        Комики
                    </Link>
                    <Link href="/about" className="text-nowrap text-gray-200 hover:text-white">
                        О проекте
                    </Link>
                </nav>
            </div>

            <div className="flex items-center justify-center gap-x-4 text-sm">
                <Link href="/content/add" className="cursor-pointer text-gray-200 hover:text-white">
                    Предложить контент
                </Link>
                {isAuth ? (
                    <Link
                        href={`/users/${username}`}
                        className="flex items-center gap-x-2 text-gray-200 hover:text-white"
                    >
                        {/* {username} */}
                        <CircleUserRoundIcon strokeWidth={1.5} />
                    </Link>
                ) : (
                    <HeaderLogin />
                )}
            </div>
        </div>
    )
}
