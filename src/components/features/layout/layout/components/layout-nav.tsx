'use client'

import ScrollContainer from 'react-indiana-drag-scroll'

import classNames from 'classnames'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

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
    const searchParams = useSearchParams()

    // Function to get the first segment of the path
    const getFirstSegment = (path: string) => path.split('/').filter(Boolean)[0] || ''

    // Current root path and query parameters
    const currentRoot = getFirstSegment(pathname)
    const currentQuery = searchParams.toString()

    const getLastSegment = (path: string) => path.split('/').filter(Boolean).pop()

    return (
        <nav>
            <ScrollContainer
                className="relative flex gap-x-4 pb-5"
                style={{
                    boxShadow: 'inset 0 -1px 0 0 #D1D5DB',
                }}
            >
                {items.map(({ label, href, exact = false }) => {
                    const target = href.toLowerCase()
                    const targetRoot = getFirstSegment(target)
                    const isActive = exact ? pathname === target : getLastSegment(pathname) === getLastSegment(target)

                    const hrefWithParams = currentRoot === targetRoot && currentQuery ? `${href}?${currentQuery}` : href

                    return (
                        <Link
                            key={`layout-nav-item-${label}`}
                            href={hrefWithParams}
                            replace
                            className={classNames(
                                'relative text-lg whitespace-nowrap text-gray-500 hover:text-gray-950',
                                {
                                    'text-gray-950 after:absolute after:-bottom-5 after:left-0 after:h-[1px] after:w-full after:bg-gray-950':
                                        isActive,
                                },
                            )}
                        >
                            {label}
                        </Link>
                    )
                })}
            </ScrollContainer>
        </nav>
    )
}
