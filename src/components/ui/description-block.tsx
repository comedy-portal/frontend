'use client'

import { useState } from 'react'

type DescriptionBlockProps = {
    text: string
    limit: number
}

export const DescriptionBlock = ({ text, limit }: DescriptionBlockProps) => {
    const [expanded, setExpanded] = useState(false)

    const isTruncated = text.length > limit
    const displayedText = expanded || !isTruncated ? text : text.slice(0, limit) + '...'

    const toggleExpanded = () => setExpanded(!expanded)

    return (
        <div>
            {displayedText}{' '}
            {isTruncated && (
                <span onClick={toggleExpanded} className="cursor-pointer text-gray-500 hover:text-gray-950">
                    {expanded ? 'Скрыть' : 'Показать всё'}
                </span>
            )}
        </div>
    )
}
