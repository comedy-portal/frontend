'use client'

import { useMemo, useState } from 'react'

import { ChevronDownIcon } from 'lucide-react'

import { contentTypesDict } from '@/utils/dict/content-types'
import { ContentType } from '@/utils/enums/common'

import { UserSidebarStatRow } from './user-sidebar-stat-row'

type UserSidebarReviewsWithTypesProps = {
    total: number
    reviewsByType?: Partial<Record<ContentType, number>>
}

export const UserSidebarReviewsWithTypes = ({ total, reviewsByType }: UserSidebarReviewsWithTypesProps) => {
    const [open, setOpen] = useState(false)

    const reviewsArray = useMemo(() => {
        if (!reviewsByType) return []

        const array = Object.entries(reviewsByType)
            .map(([key, value]) => {
                const contentType = contentTypesDict.find(item => item.slug === key.toLowerCase())
                return contentType ? { slug: contentType.slug, label: contentType.label, value } : null
            })
            .filter(Boolean) as { slug: ContentType; label: string; value: number }[]

        array.sort((a, b) => {
            const indexA = contentTypesDict.findIndex(item => item.slug === a.slug)
            const indexB = contentTypesDict.findIndex(item => item.slug === b.slug)
            return indexA - indexB
        })

        return array
    }, [reviewsByType])

    const hasReviews = reviewsArray.length > 0

    return (
        <li className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between gap-x-1 text-left">
                {hasReviews ? (
                    <div
                        className="flex cursor-pointer items-center gap-2 whitespace-nowrap"
                        onClick={() => setOpen(v => !v)}
                    >
                        Оценено выступлений
                        <ChevronDownIcon size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                    </div>
                ) : (
                    <div className="whitespace-nowrap">Оценено выступлений</div>
                )}

                <div
                    className="grow border-b border-dotted"
                    style={{
                        borderBottomColor: 'rgba(0,0,0,0.4)',
                        borderBottomWidth: '2px',
                        height: '5px',
                        marginTop: '4px',
                    }}
                />

                <div className="text-xl font-bold">{total}</div>
            </div>

            {hasReviews && open && (
                <ul className="ml-4 flex flex-col gap-y-1">
                    {reviewsArray.map(({ slug, label, value }) => (
                        <UserSidebarStatRow key={slug} label={label} value={value} variant="sub" />
                    ))}
                </ul>
            )}
        </li>
    )
}
