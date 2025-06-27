'use client'

import classNames from 'classnames'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type UserNavProps = {
    slug: string
}

type NavItem = {
    label: string
    path: (slug: string) => string
    exact?: boolean // если true — сравниваем строго, иначе через startsWith
}

const NAV_ITEMS: NavItem[] = [
    {
        label: 'Рецензии',
        path: slug => `/users/${slug.toLowerCase()}/reviews`,
    },
    {
        label: 'Избранное',
        path: slug => `/users/${slug.toLowerCase()}/watchlists`,
        exact: true,
    },
]

export const UserNav = ({ slug }: UserNavProps) => {
    const pathname = usePathname().toLowerCase()

    return (
        <nav className="flex gap-x-6 border-b border-gray-200 pb-3">
            {NAV_ITEMS.map(({ label, path, exact = false }) => {
                const href = path(slug)
                const isActive = exact ? pathname === href : pathname.startsWith(href)

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
