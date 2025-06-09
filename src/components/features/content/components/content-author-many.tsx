'use client'

import { useState } from 'react'

import Link from 'next/link'

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
    month: number | null
    year: number
}

export const ContentAuthorMany = ({ comedians, month, year }: ContentAuthorManyProps) => {
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
        <div>
            {renderComedianList(visibleComedians)}
            {!isShowMore && comedians.length > 2 && (
                <span onClick={() => setIsShowMore(true)} className="cursor-pointer text-blue-500 hover:text-blue-700">
                    {' '}
                    ...
                </span>
            )}

            <ContentDate month={month} year={year} />
        </div>
    )
}
