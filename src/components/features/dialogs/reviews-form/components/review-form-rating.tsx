'use client'

import { useState } from 'react'

import classNames from 'classnames'

import { Rating } from '@/components/ui/rating'

const getColorByIndex = (index: number) => {
    if (index <= 2) return 'bg-red-400'
    if (index <= 6) return 'bg-yellow-400'
    if (index <= 9) return 'bg-green-400'
    return 'bg-gray-400'
}

export const ReviewFormRating = () => {
    const [selected, setSelected] = useState(0)
    const [hovered, setHovered] = useState<number | null>(null)

    const currentRating = hovered ?? selected
    const isDimmed = selected === 0 && hovered === null

    return (
        <div className="flex items-start space-x-4">
            <Rating value={currentRating} className="size-12 flex-shrink-0 text-lg" />

            <div className="flex w-full flex-col space-y-3">
                <span className="font-medium text-gray-700">Мой рейтинг</span>

                <div
                    className={classNames('flex items-center space-x-0.5 overflow-hidden rounded transition-opacity', {
                        'opacity-50': isDimmed,
                        'opacity-100': !isDimmed,
                    })}
                >
                    {Array.from({ length: 10 }).map((_, index) => {
                        const isActive = currentRating > 0 && index < currentRating
                        const color =
                            hovered !== null || selected > 0
                                ? isActive
                                    ? getColorByIndex(currentRating - 1)
                                    : 'bg-gray-300'
                                : getColorByIndex(index)

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setHovered(index + 1)}
                                onMouseLeave={() => setHovered(null)}
                                onClick={() => setSelected(index + 1)}
                                className={classNames(
                                    'h-3 flex-1 cursor-pointer transition-colors duration-200',
                                    color,
                                )}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
