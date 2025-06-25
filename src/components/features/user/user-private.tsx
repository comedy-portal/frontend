import { HeartIcon, LogOutIcon, SettingsIcon, StarIcon, TvMinimalPlayIcon } from 'lucide-react'

import Link from 'next/link'

import { UserHeader } from './components/user-header'
import { UserLogout } from './components/user-logout'

type UserPrivateProps = {
    username: string
}

export const UserPrivate = ({ username }: UserPrivateProps) => {
    return (
        <div>
            <UserHeader username={username} />
            <div className="container py-12">
                {/* <p className="text-center text-gray-500">
                    This is private user profile area for <strong>{username}</strong>.<br />
                    Only the user can see this content.
                    <br />
                    <UserLogout />
                </p> */}

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-[250px_1fr]">
                    <aside className="flex flex-col gap-y-2">
                        <Link
                            href="#"
                            className="flex items-center gap-x-2 rounded-lg p-2 font-semibold text-black no-underline! hover:bg-gray-200"
                        >
                            <HeartIcon />
                            Смотреть позже
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-x-2 rounded-lg p-2 font-semibold text-black no-underline! hover:bg-gray-200"
                        >
                            <StarIcon />
                            Мои оценки
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-x-2 rounded-lg p-2 font-semibold text-black no-underline! hover:bg-gray-200"
                        >
                            <SettingsIcon />
                            Настройки
                        </Link>
                        <hr />
                        <div className="flex cursor-pointer items-center gap-x-2 rounded-lg p-2 font-semibold text-red-500 hover:bg-gray-200">
                            <LogOutIcon />
                            Выйти
                        </div>
                    </aside>

                    {/* Контент справа */}
                    <main className="rounded-lg bg-white p-6 shadow-xs">Контент</main>
                </div>
            </div>
        </div>
    )
}
