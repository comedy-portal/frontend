'use client'

import ScrollContainer from 'react-indiana-drag-scroll'

import classNames from 'classnames'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import 'react-indiana-drag-scroll/dist/style.css'

type LayoutNavProps = {
    items: {
        label: string
        href: string
        exact?: boolean
    }[]
}

export const LayoutNav = ({ items }: LayoutNavProps) => {
    const pathname = usePathname().toLowerCase()

    const getLastSegment = (path: string) => path.split('/').filter(Boolean).pop()

    return (
        <ScrollContainer>
            <nav className="relative flex gap-x-4 border-b border-gray-300 pb-[19px]">
                {items.map(({ label, href, exact = false }) => {
                    const target = href.toLowerCase()
                    const isActive = exact ? pathname === target : getLastSegment(pathname) === getLastSegment(target)

                    return (
                        <Link
                            key={`layout-nav-item-${label}`}
                            href={href}
                            replace
                            className={classNames('relative text-lg text-nowrap text-gray-500 hover:text-gray-950', {
                                'text-gray-950 after:absolute after:-bottom-[20px] after:left-0 after:h-[1px] after:w-full after:bg-gray-950':
                                    isActive,
                                '': !isActive,
                            })}
                        >
                            {label}
                        </Link>
                    )
                })}
            </nav>
        </ScrollContainer>
    )
}
