import Link from 'next/link'

import { ContentType } from '@/utils/enums/common'

type ContentBlockDateProps = {
    slug: ContentType
    year: number
}

export const ContentBlockDate = ({ slug, year }: ContentBlockDateProps) => {
    return (
        <Link
            href={`/content/${slug.toLowerCase()}?min_year=${year}&max_year=${year}`}
            className="inline-block rounded bg-gray-200 px-3 py-1 text-xs text-gray-500 hover:bg-gray-500 hover:text-white"
        >
            {year}
        </Link>
    )
}
