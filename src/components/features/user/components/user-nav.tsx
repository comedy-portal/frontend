'use client'

import classNames from 'classnames'
import { HeartIcon, LogOutIcon, SettingsIcon, StarIcon } from 'lucide-react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type UserNavProps = {
    slug: string
}

export const UserNav = ({ slug }: UserNavProps) => {
    const pathname = usePathname()

    return (
        <aside className="hidden flex-col gap-y-2 sm:flex">
            <Link
                href={`/users/${slug}/watchlists`}
                className={classNames(
                    'flex items-center gap-x-2 rounded p-2 text-sm font-semibold text-black no-underline! hover:bg-gray-200',
                    {
                        'bg-gray-200': pathname.toLowerCase() === `/users/${slug}/watchlists`,
                    },
                )}
            >
                <HeartIcon />
                Смотреть позже
            </Link>
            <Link
                href={`/users/${slug}/ratings`}
                className={classNames(
                    'flex items-center gap-x-2 rounded p-2 text-sm font-semibold text-black no-underline! hover:bg-gray-200',
                    {
                        'bg-gray-200': pathname.toLowerCase() === `/users/${slug}/ratings`,
                    },
                )}
            >
                <StarIcon />
                Мои оценки
            </Link>
            <Link
                href={`/users/${slug}/settings`}
                className={classNames(
                    'flex items-center gap-x-2 rounded p-2 text-sm font-semibold text-black no-underline! hover:bg-gray-200',
                    {
                        'bg-gray-200': pathname.toLowerCase() === `/users/${slug}/settings`,
                    },
                )}
            >
                <SettingsIcon />
                Настройки
            </Link>
            <hr />
            <div className="flex cursor-pointer items-center gap-x-2 rounded p-2 text-sm font-semibold text-red-500 hover:bg-gray-200">
                <LogOutIcon />
                Выйти
            </div>
        </aside>
    )
}
