import Link from 'next/link'

import { ContentDate } from './content-date'

type ContentAuthorGroupProps = {
    slug: string
    name: string
    month: number | null
    year: number
}

export const ContentAuthorGroup = ({ slug, name, month, year }: ContentAuthorGroupProps) => {
    return (
        <div className="flex gap-x-2">
            <Link href={`/groups/${slug}`} className="text-black no-underline! hover:underline!">
                {name}
            </Link>
            <span className="text-gray-500">•</span>
            <ContentDate month={month} year={year} />
        </div>
    )
}
