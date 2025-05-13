import { MicOffIcon } from 'lucide-react'

import Link from 'next/link'

import { Logo } from '@/components/ui/logo'

export default async function NotFound() {
    return (
        <div className="relative size-full">
            <Logo className="absolute top-6 left-6 text-black" />

            <div className="container size-full py-12">
                <div className="flex size-full items-center justify-center">
                    <div className="flex flex-col gap-y-8 text-center">
                        <MicOffIcon size={128} className="m-auto" />
                        <h1 className="mb-0 text-2xl font-bold!">Страница не найдена</h1>
                        <p>
                            Возможно, она была перемещена,
                            <br />
                            или вы просто неверно указали адрес страницы.
                        </p>
                        <Link href="/">Перейти на главную</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
