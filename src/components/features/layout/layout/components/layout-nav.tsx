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
            <nav className="relative flex gap-x-6 border-b border-gray-200 pb-3">
                {items.map(({ label, href, exact = false }) => {
                    const target = href.toLowerCase()
                    const isActive = exact ? pathname === target : getLastSegment(pathname) === getLastSegment(target)

                    return (
                        <Link
                            key={`nav-item-${label}`}
                            href={href}
                            className={classNames('relative text-nowrap no-underline!', {
                                'text-black! after:absolute after:-bottom-[17px] after:left-0 after:h-[1px] after:w-full after:bg-black':
                                    isActive,
                                'text-gray-500! hover:text-black!': !isActive,
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
