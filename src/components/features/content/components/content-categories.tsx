'use client'

import ScrollContainer from 'react-indiana-drag-scroll'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { ContentType } from '@/types/content'

import 'react-indiana-drag-scroll/dist/style.css'

type Category = {
    type: ContentType | 'all'
    label: string
}

const categories: Category[] = [
    { type: 'all', label: 'Все' },
    { type: ContentType.DISCUSSION, label: 'Дискуссия' },
    { type: ContentType.IMPROV_SHOW, label: 'Импровизация' },
    { type: ContentType.PODCAST, label: 'Подкаст' },
    { type: ContentType.ROAST_BATTLE, label: 'Прожарка' },
    { type: ContentType.SERIES, label: 'Сериалы' },
    { type: ContentType.STANDUP, label: 'Стендап' },
    { type: ContentType.SKETCH, label: 'Скетчи' },
    { type: ContentType.SPECIAL, label: 'Спешиал' },
    { type: ContentType.TALK_SHOW, label: 'Ток-шоу' },
]

export const ContentCategories = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const currentType = searchParams.get('type')

    const createHref = (type: string) => {
        const params = new URLSearchParams(searchParams.toString())

        if (type === 'all') {
            params.delete('type')
        } else {
            params.set('type', type)
        }

        const query = params.toString()
        return `${pathname}${query ? `?${query}` : ''}`
    }

    return (
        <ScrollContainer>
            <nav>
                <ul className="flex gap-2 p-0">
                    {categories.map(({ type, label }) => {
                        const isSelected = currentType === type || (type === 'all' && !currentType)

                        return (
                            <li key={type}>
                                <Link
                                    href={createHref(type)}
                                    className={`block rounded bg-gray-100 px-4 py-2 whitespace-nowrap text-black no-underline! hover:bg-gray-300 hover:text-black ${
                                        isSelected ? 'bg-gray-300' : ''
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </ScrollContainer>
    )
}
