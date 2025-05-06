import { MenuIcon } from 'lucide-react'

import Link from 'next/link'

export const Nav = () => {
    return (
        <div>
            <MenuIcon className="text-white sm:hidden" />
            <nav className="hidden items-center justify-center gap-x-4 sm:flex">
                <Link href="/content" className="text-sm text-white no-underline! hover:underline!">
                    Контент
                </Link>
                <Link href="/comedians" className="text-sm text-white no-underline! hover:underline!">
                    Комики
                </Link>
            </nav>
        </div>
    )
}
