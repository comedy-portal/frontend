import Link from 'next/link'

import { contentTypesDict } from '@/utils/dict/content-types'
import { ContentType } from '@/utils/enums/common'

type ContentBlockTypeProps = {
    slug: ContentType
}

export const ContentBlockType = ({ slug }: ContentBlockTypeProps) => {
    return (
        <Link
            href={`/content/${slug.toLowerCase()}`}
            className="inline-block rounded bg-gray-200 px-3 py-1 text-xs text-gray-500 hover:bg-gray-500 hover:text-white"
        >
            {contentTypesDict.find(contentType => contentType.slug === slug.toLowerCase())?.label || ''}
        </Link>
    )
}
