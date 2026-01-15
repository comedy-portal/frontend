import { MicOffIcon } from 'lucide-react'

import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="wrapper flex h-full items-center justify-center">
            <div className="flex flex-col gap-y-8 text-center">
                <MicOffIcon size={128} className="m-auto" />
                <h1 className="text-2xl font-bold">Страница не найдена</h1>
                <p>
                    Возможно, она была перемещена,
                    <br />
                    или вы&nbsp;просто неверно указали адрес страницы.
                </p>
                <Link
                    href="/"
                    className="flex h-10 items-center justify-center rounded-lg border border-gray-700 px-6 text-sm font-bold text-gray-700 hover:border-gray-950 hover:text-gray-950"
                >
                    Перейти на главную
                </Link>
            </div>
        </div>
    )
}
