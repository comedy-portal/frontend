import Link from 'next/link'

import { categories } from '@/utils/dict/categories'
import { ContentType } from '@/utils/enums/common'

import { ContentDate } from './content-date'

type ContentAuthorGroupProps = {
    name: string
    slug: string
    type: ContentType
    month: number | null
    year: number
}

export const ContentAuthorGroup = ({ name, slug, type, month, year }: ContentAuthorGroupProps) => {
    return (
        <div className="flex gap-x-2">
            <Link href={`/groups/${slug}`} className="no-underline!">
                {name}
            </Link>
            <span className="text-gray-500">•</span>
            <Link href={`/content/${type.toLowerCase()}`} className="no-underline!">
                {categories.find(category => category.type === type.toLowerCase())?.label}
            </Link>
            <span className="text-gray-500">•</span>
            <ContentDate month={month} year={year} />
        </div>
    )
}
