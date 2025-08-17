'use client'

import ScrollContainer from 'react-indiana-drag-scroll'

import classNames from 'classnames'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import 'react-indiana-drag-scroll/dist/style.css'

type LayoutNavProps = {
    items?: {
        label: string
        href: string
        exact?: boolean
        filter?: React.ReactNode
    }[]
    filter?: React.ReactNode
    preserveQuery?: boolean
}

export const LayoutNav = ({ items, filter, preserveQuery = false }: LayoutNavProps) => {
    const pathname = usePathname().toLowerCase()
    const searchParams = useSearchParams()

    const getFirstSegment = (path: string) => path.split('/').filter(Boolean)[0] || ''
    const getLastSegment = (path: string) => path.split('/').filter(Boolean).pop()

    const currentRoot = getFirstSegment(pathname)
    const currentQuery = searchParams.toString()

    if (!items || items.length === 0) {
        return <hr className="border-gray-200" />
    }

    let activeFilter: React.ReactNode = filter ?? null

    const renderedItems = items.map(({ label, href, exact = false, filter: itemFilter }) => {
        const target = href.toLowerCase()
        const isActive = exact ? pathname === target : getLastSegment(pathname) === getLastSegment(target)

        if (!activeFilter && isActive) {
            activeFilter = itemFilter ?? null
        }

        const hrefWithParams =
            preserveQuery && currentRoot === getFirstSegment(target) && currentQuery ? `${href}?${currentQuery}` : href

        return (
            <Link
                key={`layout-nav-item-${label}`}
                href={hrefWithParams}
                replace
                className={classNames('relative text-lg whitespace-nowrap text-gray-500 hover:text-gray-950', {
                    'text-gray-950 after:absolute after:-bottom-5 after:left-0 after:h-[1px] after:w-full after:bg-gray-950':
                        isActive,
                })}
            >
                {label}
            </Link>
        )
    })

    return (
        <div className="flex items-center gap-x-6">
            {activeFilter && <div className="shrink-0">{activeFilter}</div>}
            <nav className="min-w-0 flex-1">
                <ScrollContainer
                    className="relative flex gap-x-4 pb-5"
                    style={{ boxShadow: 'inset 0 -1px 0 0 #D1D5DB' }}
                >
                    {renderedItems}
                </ScrollContainer>
            </nav>
        </div>
    )
}
