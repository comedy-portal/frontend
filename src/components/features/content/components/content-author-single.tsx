import Link from 'next/link'

import { ContentBlockTag } from '@/components/ui/content-block/components/content-block-tag'
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
        <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
            <ContentBlockTag
                link={`/content/${type.toLowerCase()}`}
                title={categories.find(category => category.type === type.toLowerCase())?.label || ''}
            />
            <span className="text-gray-500">•</span>
            <Link href={`/comedians/${slug}`} className="no-underline">
                {name} {surname}
            </Link>
            <span className="hidden text-gray-500 sm:block">•</span>
            <div className="flex gap-x-2">
                <ContentDate month={month} year={year} />
            </div>
        </div>
    )
}
