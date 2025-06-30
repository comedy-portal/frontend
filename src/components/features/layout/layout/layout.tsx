import classNames from 'classnames'
import { ChevronsRightIcon } from 'lucide-react'

import Link from 'next/link'

import { LayoutNav } from './components/layout-nav'

type LayoutProps = {
    children: React.ReactNode
    title: string
    size: 'sm' | 'lg'
    nav: {
        label: string
        href: string
        exact?: boolean
    }[]
}

export const Layout = ({ children, title, size, nav }: LayoutProps) => {
    const wrapperSize = `wrapper-${size}`

    return (
        <div className={classNames(wrapperSize, 'py-8 sm:py-16')}>
            <div className="flex flex-col gap-y-8 sm:gap-y-8">
                <nav className="flex items-center gap-x-1">
                    <Link href="/" className="text-sm text-gray-500! no-underline! hover:text-black!">
                        Главная
                    </Link>
                    <ChevronsRightIcon size={14} className="mt-0.5 text-gray-500" />
                    <Link href="/contents" className="text-sm text-gray-500! no-underline! hover:text-black!">
                        Контент
                    </Link>
                    <ChevronsRightIcon size={14} className="mt-0.5 text-gray-500" />
                    <Link href="/contents" className="text-sm text-gray-500! no-underline! hover:text-black!">
                        Лично
                    </Link>
                    <ChevronsRightIcon size={14} className="mt-0.5 text-gray-500" />
                    <Link href="/contents" className="text-sm text-gray-500! no-underline! hover:text-black!">
                        Рецензии
                    </Link>
                </nav>

                <h1 className="mb-0!">{title}</h1>
                <LayoutNav items={nav} />
                {children}
            </div>
        </div>
    )
}
