import Link from 'next/link'

import { Tag } from '@/components/ui/tag'
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
        <div className="flex flex-col gap-x-2 sm:!flex-row sm:!items-center">
            <Tag
                link={`/content/${type.toLowerCase()}`}
                title={categories.find(category => category.type === type.toLowerCase())?.label || ''}
            />
            <span className="text-gray-500">•</span>
            <Link href={`/groups/${slug}`} className="no-underline!">
                {name}
            </Link>
            <span className="text-gray-500">•</span>
            <ContentDate month={month} year={year} />
        </div>
    )
}
