'use client'

import ScrollContainer from 'react-indiana-drag-scroll'

import classNames from 'classnames'

import { useRouter, useSearchParams } from 'next/navigation'

import { ContentType, ContentUrlSortBy } from '@/utils/enums/common'

import 'react-indiana-drag-scroll/dist/style.css'

type Category = {
    type: ContentType
    label: string
}

const categories: Category[] = [
    { type: ContentType.SPECIAL, label: 'Спешл' },
    { type: ContentType.STANDUP, label: 'Стендап' },
    { type: ContentType.DISCUSSION, label: 'Дискуссия' },
    { type: ContentType.IMPROV_SHOW, label: 'Импровизация' },
    { type: ContentType.PODCAST, label: 'Подкаст' },
    { type: ContentType.ROAST_BATTLE, label: 'Прожарка' },
    { type: ContentType.SERIES, label: 'Сериалы' },
    { type: ContentType.SKETCH, label: 'Скетчи' },
    { type: ContentType.TALK_SHOW, label: 'Ток-шоу' },
]

type ContentCategoriesProps = {
    slug: ContentType
}

export const ContentCategories = ({ slug }: ContentCategoriesProps) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentType = slug.toLowerCase()

    const handleClick = (type: ContentType) => {
        router.push(`/content/${type.toLowerCase()}?sort=${searchParams.get('sort') || ContentUrlSortBy.DATE_DESC}`)
    }

    return (
        <ScrollContainer>
            <nav>
                <ul className="flex gap-2 p-0">
                    {categories.map(({ type, label }) => {
                        const isActive = currentType === type.toLowerCase()

                        return (
                            <li key={`content-type-${type}`}>
                                <div
                                    className={classNames(
                                        'cursor-pointer rounded bg-gray-100 px-4 py-2 whitespace-nowrap text-black hover:bg-gray-300 hover:text-black',
                                        {
                                            'bg-gray-300': isActive,
                                        },
                                    )}
                                    onClick={() => handleClick(type)}
                                >
                                    {label}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </ScrollContainer>
    )
}
