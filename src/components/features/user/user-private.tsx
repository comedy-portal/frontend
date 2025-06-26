import { HeartIcon, LogOutIcon, SettingsIcon, StarIcon } from 'lucide-react'

import Link from 'next/link'

import { UserHeader } from './components/user-header'

type UserPrivateProps = {
    username: string
}

export const UserPrivate = ({ username }: UserPrivateProps) => {
    return (
        <div>
            <UserHeader username={username} />
            <div className="container py-12">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-[250px_1fr]">
                    <aside className="hidden flex-col gap-y-2 sm:flex">
                        <Link
                            href="#"
                            className="flex items-center gap-x-2 rounded p-2 font-semibold text-black no-underline! hover:bg-gray-200"
                        >
                            <HeartIcon />
                            Смотреть позже
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-x-2 rounded p-2 font-semibold text-black no-underline! hover:bg-gray-200"
                        >
                            <StarIcon />
                            Мои оценки
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-x-2 rounded p-2 font-semibold text-black no-underline! hover:bg-gray-200"
                        >
                            <SettingsIcon />
                            Настройки
                        </Link>
                        <hr />
                        <div className="flex cursor-pointer items-center gap-x-2 rounded p-2 font-semibold text-red-500 hover:bg-gray-200">
                            <LogOutIcon />
                            Выйти
                        </div>
                    </aside>

                    <main className="rounded bg-white p-6 shadow-xs">Контент</main>
                </div>
            </div>
        </div>
    )
}
