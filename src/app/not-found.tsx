import { MicOffIcon } from 'lucide-react'

import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="wrapper flex items-center justify-center py-16 sm:py-24">
            <div className="flex flex-col gap-y-8 text-center">
                <MicOffIcon size={128} className="m-auto" />
                <h1 className="text-2xl font-bold">Страница не найдена</h1>
                <p>
                    Возможно, она была перемещена,
                    <br />
                    или вы&nbsp;просто неверно указали адрес страницы.
                </p>
                <Link href="/" className="text-blue-500 hover:text-blue-700">
                    Перейти на главную
                </Link>
            </div>
        </div>
    )
}
