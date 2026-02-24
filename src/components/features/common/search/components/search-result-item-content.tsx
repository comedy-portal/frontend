import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { Rating } from '@/components/ui/rating'
import { contentTypesDict } from '@/utils/dict/content-types'
import { ContentType } from '@/utils/enums/common'

type SearchResultItemContentProps = {
    id: number
    name: string
    type: ContentType
    year: number
    avgRating: number
    hideResults: () => void
}

export const SearchResultItemContent = (props: SearchResultItemContentProps) => {
    return (
        <Link
            href={`/content/${props.type.toLowerCase()}/${props.id}`}
            className="group relative block cursor-pointer rounded-lg hover:bg-gray-50"
            onClick={props.hideResults}
        >
            <div className="flex w-full items-center justify-between gap-x-3">
                <div className="overflow-hidden">
                    <div
                        className="text-gray-650 line-clamp-1 text-sm font-semibold wrap-break-word"
                        title={props.name}
                    >
                        {props.name}
                    </div>
                    <div className="text-xs text-gray-400">
                        {props.year} /{' '}
                        {contentTypesDict.find(contentType => contentType.slug === props.type.toLowerCase())?.label ||
                            ''}
                    </div>
                </div>
                <Rating value={props.avgRating} className="size-9! shrink-0 text-sm" />
            </div>
        </Link>
    )
}
