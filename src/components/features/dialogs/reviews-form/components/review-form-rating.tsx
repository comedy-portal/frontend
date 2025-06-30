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

type ReviewFormRatingProps = {
    value: number
    error?: string
    onChange: (value: number) => void
}

export const ReviewFormRating = ({ value, error, onChange }: ReviewFormRatingProps) => {
    const [hovered, setHovered] = useState<number | null>(null)

    const currentRating = hovered ?? value
    const isDimmed = value === 0 && hovered === null

    return (
        <div>
            <div className="flex items-center gap-x-4">
                <Rating value={currentRating} className="size-12 flex-shrink-0 text-lg" />

                <div className="flex w-full flex-col space-y-3.5">
                    <span className="text-sm font-semibold text-gray-700">Рейтинг</span>

                    <div
                        className={classNames(
                            'flex items-center space-x-0.5 overflow-hidden rounded transition-opacity',
                            {
                                'opacity-50': isDimmed,
                                'opacity-100': !isDimmed,
                            },
                        )}
                    >
                        {Array.from({ length: 10 }).map((_, index) => {
                            const isActive = currentRating > 0 && index < currentRating
                            const color =
                                hovered !== null || value > 0
                                    ? isActive
                                        ? getColorByIndex(currentRating - 1)
                                        : 'bg-gray-300'
                                    : getColorByIndex(index)

                            return (
                                <div
                                    key={index}
                                    onMouseEnter={() => setHovered(index + 1)}
                                    onMouseLeave={() => setHovered(null)}
                                    onClick={() => onChange(index + 1)}
                                    className={classNames(
                                        'h-3.5 flex-1 cursor-pointer transition-colors duration-200',
                                        color,
                                    )}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            {error && <div className="mt-1 pl-16 text-xs text-red-500">{error}</div>}
        </div>
    )
}
