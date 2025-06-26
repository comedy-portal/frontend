'use client'

import { useState } from 'react'

import Link from 'next/link'

import { ContentTag } from '@/components/ui/content-tag'
import { categories } from '@/utils/dict/categories'
import { ContentType } from '@/utils/enums/common'

import { ContentDate } from './content-date'

type Comedian = {
    id: number
    name: string
    surname: string
    slug: string
    isAgent: boolean
}

type ContentAuthorManyProps = {
    comedians: Comedian[]
    type: ContentType
    month: number | null
    year: number
}

export const ContentAuthorMany = ({ comedians, type, month, year }: ContentAuthorManyProps) => {
    const [isShowMore, setIsShowMore] = useState(false)

    const visibleComedians = isShowMore ? comedians : comedians.slice(0, 2)

    const renderComedianList = (list: Comedian[]) =>
        list.map((comedian, index) => (
            <span key={`comedian-${comedian.id}`}>
                <Link href={`/comedians/${comedian.slug}`} className="no-underline!">
                    {comedian.name} {comedian.surname}
                </Link>
                {index < list.length - 1 && <span className="text-gray-500">, </span>}
            </span>
        ))

    return (
        <div className="flex flex-col gap-y-2">
            <div>
                {renderComedianList(visibleComedians)}
                {!isShowMore && comedians.length > 2 && (
                    <span
                        onClick={() => setIsShowMore(true)}
                        className="cursor-pointer text-blue-500 hover:text-blue-700"
                    >
                        {' '}
                        ...
                    </span>
                )}
            </div>

            <div className="flex items-center gap-x-2">
                <ContentTag
                    link={`/content/${type.toLowerCase()}`}
                    title={categories.find(category => category.type === type.toLowerCase())?.label || ''}
                />
                <span className="text-gray-500">•</span>
                <ContentDate month={month} year={year} />
            </div>
        </div>
    )
}
