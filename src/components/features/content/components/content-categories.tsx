'use client'

import { useEffect } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

import classNames from 'classnames'

import Link from 'next/link'

import { setContentCursor } from '@/redux/features/content-slice'
import { useAppDispatch } from '@/redux/hooks'
import { ContentType } from '@/types/content'

import 'react-indiana-drag-scroll/dist/style.css'

type Category = {
    type: ContentType
    label: string
}

const categories: Category[] = [
    { type: ContentType.DISCUSSION, label: 'Дискуссия' },
    { type: ContentType.IMPROV_SHOW, label: 'Импровизация' },
    { type: ContentType.PODCAST, label: 'Подкаст' },
    { type: ContentType.ROAST_BATTLE, label: 'Прожарка' },
    { type: ContentType.SERIES, label: 'Сериалы' },
    { type: ContentType.SKETCH, label: 'Скетчи' },
    { type: ContentType.SPECIAL, label: 'Спешиал' },
    { type: ContentType.STANDUP, label: 'Стендап' },
    { type: ContentType.TALK_SHOW, label: 'Ток-шоу' },
]

type ContentCategoriesProps = {
    slug: ContentType
}

export const ContentCategories = ({ slug }: ContentCategoriesProps) => {
    const dispatch = useAppDispatch()
    const currentType = slug.toLowerCase()

    useEffect(() => {
        dispatch(setContentCursor(0))
    }, [currentType, dispatch])

    return (
        <ScrollContainer>
            <nav>
                <ul className="flex gap-2 p-0">
                    {categories.map(({ type, label }) => {
                        const isActive = currentType === type.toLowerCase()

                        return (
                            <li key={`content-type-${type}`}>
                                <Link
                                    href={`/content/${type.toLowerCase()}`}
                                    className={classNames(
                                        'block rounded bg-gray-100 px-4 py-2 whitespace-nowrap text-black no-underline! hover:bg-gray-300 hover:text-black',
                                        {
                                            'bg-gray-300': isActive,
                                        },
                                    )}
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
