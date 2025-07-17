import { CircleUserIcon, MicIcon } from 'lucide-react'

import Link from 'next/link'

import { Search } from '@/components/features/layout/search/search'

import { HeaderLogin } from './components/header-login'
import { HeaderSubmitContent } from './components/header-submit-content'

type HeaderDesktopProps = {
    username?: string
    isAuth: boolean
}

export const HeaderDesktop = ({ username, isAuth }: HeaderDesktopProps) => {
    return (
        <div className="flex h-full flex-row items-center justify-between">
            <div className="flex h-full items-center justify-center gap-x-6">
                <Link href="/" className="relative flex h-full items-center gap-x-2 whitespace-nowrap text-white">
                    <MicIcon size={32} strokeWidth={2} />
                    <div>
                        <div className="mb-0.5 text-[12px] leading-none font-semibold text-white">Альфа</div>
                        <div className="text-[18px] leading-none font-extrabold uppercase">ComedyPortal</div>
                    </div>
                </Link>

                <Search />

                <nav className="flex items-center justify-center gap-x-4 text-sm">
                    <Link href="/content" className="text-nowrap text-gray-300 hover:text-white">
                        Контент
                    </Link>
                    <Link href="/comedians" className="text-nowrap text-gray-300 hover:text-white">
                        Комики
                    </Link>
                    <Link href="/comedians/groups" className="text-nowrap text-gray-300 hover:text-white">
                        Группы
                    </Link>
                    <Link href="/about" className="text-nowrap text-gray-300 hover:text-white">
                        О проекте
                    </Link>
                </nav>
            </div>

            <div className="flex items-center justify-center gap-x-4 text-sm">
                <HeaderSubmitContent isAuth={isAuth} />
                {isAuth ? (
                    <Link href={`/users/${username}`} className="text-gray-300 hover:text-white">
                        <CircleUserIcon />
                    </Link>
                ) : (
                    <HeaderLogin />
                )}
            </div>
        </div>
    )
}
