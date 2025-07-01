import classNames from 'classnames'
import { CircleArrowLeftIcon } from 'lucide-react'

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
    backURL?: string
}

export const Layout = ({ children, title, size, nav, backURL }: LayoutProps) => {
    const wrapperSize = `wrapper-${size}`

    return (
        <div className={classNames(wrapperSize, 'py-8 sm:py-16')}>
            <div className="flex flex-col gap-y-8 sm:gap-y-8">
                <div className="flex items-center gap-x-4">
                    {backURL && (
                        <Link href={backURL} className="text-gray-500 hover:text-gray-700">
                            <CircleArrowLeftIcon size={36} />
                        </Link>
                    )}
                    <h1 className="text-3xl sm:text-4xl">{title}</h1>
                </div>
                <LayoutNav items={nav} />
                {children}
            </div>
        </div>
    )
}
