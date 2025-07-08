'use client'

import { useState } from 'react'

import classNames from 'classnames'

import { Rating } from '@/components/ui/rating'

const getColorByIndex = (index: number) => {
    if (index <= 2) return 'bg-red-400'
    if (index <= 6) return 'bg-yellow-400'
    if (index <= 9) return 'bg-green-400'
    return 'bg-gray-200'
}

type RatingBarProps = {
    value: number
    reviewsCount?: number
    caption: string
    editable?: boolean
    error?: string
    onChange?: (value: number) => void
    onClick?: () => void
}

export const RatingBar = ({
    value,
    reviewsCount,
    caption,
    editable = false,
    error,
    onChange,
    onClick,
}: RatingBarProps) => {
    const [hovered, setHovered] = useState<number | null>(null)

    const currentRating = hovered ?? value
    const isDimmed = editable && value === 0 && hovered === null

    const isReadOnlyClickable = !!onClick && !editable
    const showPointerOnBar = editable || isReadOnlyClickable
    const showPointerOnRating = !!onClick

    const handleBarClick = (index: number) => {
        if (editable) {
            onChange?.(index)
        } else if (isReadOnlyClickable) {
            onClick?.()
        }
    }

    return (
        <div>
            <div className={classNames('flex items-center gap-x-4')}>
                <div className="flex w-full flex-col gap-y-2">
                    <div className="flex items-center justify-between text-gray-700">
                        <div className="font-bold">{caption}</div>
                        {!!reviewsCount && <div className="text-sm text-gray-500">(оценок: {reviewsCount})</div>}
                    </div>

                    <div
                        className={classNames('flex items-center overflow-hidden rounded-2xl transition-opacity', {
                            'opacity-50': isDimmed,
                            'opacity-100': !isDimmed,
                        })}
                    >
                        {Array.from({ length: 10 }).map((_, index) => {
                            const isActive = currentRating > 0 && index < currentRating

                            const color =
                                hovered !== null || value > 0
                                    ? isActive
                                        ? getColorByIndex(currentRating - 1)
                                        : 'bg-gray-300'
                                    : editable
                                      ? getColorByIndex(index)
                                      : 'bg-gray-200'

                            return (
                                <div
                                    key={`rating-bar-color-${index}`}
                                    className={classNames(
                                        'ml-0.5 h-4 flex-1 transition-colors duration-200 first:ml-0',
                                        color,
                                        showPointerOnBar && 'cursor-pointer',
                                    )}
                                    onMouseEnter={() => editable && setHovered(index + 1)}
                                    onMouseLeave={() => editable && setHovered(null)}
                                    onClick={() => handleBarClick(index + 1)}
                                />
                            )
                        })}
                    </div>
                </div>

                <Rating
                    value={currentRating}
                    className={classNames('size-12 flex-shrink-0 text-lg', showPointerOnRating && 'cursor-pointer')}
                    onClick={onClick}
                />
            </div>

            {error && <div className="mt-1 text-xs text-red-500">{error}</div>}
        </div>
    )
}
