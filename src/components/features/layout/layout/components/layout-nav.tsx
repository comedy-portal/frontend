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
    preserveQueryParams?: boolean
}

export const LayoutNav = ({ items, preserveQueryParams }: LayoutNavProps) => {
    const pathname = usePathname().toLowerCase()
    const searchParams = useSearchParams()

    const getFirstSegment = (path: string) => path.split('/').filter(Boolean)[0] || ''
    const getLastSegment = (path: string) => path.split('/').filter(Boolean).pop()

    const currentRoot = getFirstSegment(pathname)
    const currentQuery = searchParams.toString()

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

                    let hrefWithParams = href
                    if (preserveQueryParams && currentRoot === targetRoot && currentQuery) {
                        hrefWithParams = `${href}?${currentQuery}`
                    }

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
