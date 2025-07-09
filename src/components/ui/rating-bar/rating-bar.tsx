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

export const RatingBar = (props: RatingBarProps) => {
    const [hovered, setHovered] = useState<number | null>(null)

    const currentRating = hovered ?? props.value
    const isDimmed = props.editable && props.value === 0 && hovered === null

    const isReadOnlyClickable = !!props.onClick && !props.editable
    const showPointerOnBar = props.editable || isReadOnlyClickable
    const showPointerOnRating = !!props.onClick

    const handleBarClick = (index: number) => {
        if (props.editable) {
            props.onChange?.(index)
        } else if (isReadOnlyClickable) {
            props.onClick?.()
        }
    }

    return (
        <div>
            <div className={classNames('flex items-center gap-x-4')}>
                <div className="flex w-full flex-col gap-y-2">
                    <div className="flex items-center justify-between text-gray-700">
                        <div className="font-bold">{props.caption}</div>
                        {!!props.reviewsCount && (
                            <div className="text-sm text-gray-500">Оценок: {props.reviewsCount}</div>
                        )}

                        {!!props.onClick && (
                            <div
                                onClick={props.onClick}
                                className="cursor-pointer text-sm text-gray-500 hover:text-gray-950"
                            >
                                Оценить
                            </div>
                        )}
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
                                hovered !== null || props.value > 0
                                    ? isActive
                                        ? getColorByIndex(currentRating - 1)
                                        : 'bg-gray-300'
                                    : props.editable
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
                                    onMouseEnter={() => props.editable && setHovered(index + 1)}
                                    onMouseLeave={() => props.editable && setHovered(null)}
                                    onClick={() => handleBarClick(index + 1)}
                                />
                            )
                        })}
                    </div>
                </div>

                <Rating
                    value={currentRating}
                    className={classNames('size-12 flex-shrink-0 text-lg', showPointerOnRating && 'cursor-pointer')}
                    onClick={props.onClick}
                />
            </div>

            {props.error && <div className="mt-1 text-xs text-red-500">{props.error}</div>}
        </div>
    )
}
