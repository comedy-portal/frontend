'use client'

import classNames from 'classnames'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavProps = {
    items: {
        label: string
        href: string
        exact?: boolean
    }[]
}

export const Nav = ({ items }: NavProps) => {
    const pathname = usePathname().toLowerCase()

    const getLastSegment = (path: string) => path.split('/').filter(Boolean).pop()

    return (
        <nav className="flex gap-x-6 border-b border-gray-200 pb-3">
            {items.map(({ label, href, exact = false }) => {
                const target = href.toLowerCase()
                const isActive = exact ? pathname === target : getLastSegment(pathname) === getLastSegment(target)

                return (
                    <Link
                        key={label}
                        href={href}
                        className={classNames('relative text-sm no-underline!', {
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
    )
}
