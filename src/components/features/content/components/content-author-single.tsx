import Link from 'next/link'

import { ContentDate } from './content-date'

type ContentAuthorSingleProps = {
    name: string
    surname: string
    slug: string
    month: number | null
    year: number
}

export const ContentAuthorSingle = ({ name, surname, slug, month, year }: ContentAuthorSingleProps) => {
    return (
        <div className="flex gap-x-2">
            <Link href={`/comedians/${slug}`} className="text-black no-underline! hover:underline!">
                {name} {surname}
            </Link>
            <span className="text-gray-500">•</span>
            <ContentDate month={month} year={year} />
        </div>
    )
}
