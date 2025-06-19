import Link from 'next/link'

import { categories } from '@/utils/dict/categories'
import { ContentType } from '@/utils/enums/common'

import { ContentDate } from './content-date'

type ContentAuthorSingleProps = {
    name: string
    surname: string
    slug: string
    type: ContentType
    month: number | null
    year: number
}

export const ContentAuthorSingle = ({ name, surname, slug, type, month, year }: ContentAuthorSingleProps) => {
    return (
        <div className="flex flex-col gap-x-2 sm:!flex-row sm:!items-center">
            <Link href={`/comedians/${slug}`} className="no-underline!">
                {name} {surname}
            </Link>
            <span className="hidden text-gray-500 sm:block">•</span>
            <div className="flex gap-x-2">
                <Link href={`/content/${type.toLowerCase()}`} className="no-underline!">
                    {categories.find(category => category.type === type.toLowerCase())?.label}
                </Link>
                <span className="text-gray-500">•</span>
                <ContentDate month={month} year={year} />
            </div>
        </div>
    )
}
