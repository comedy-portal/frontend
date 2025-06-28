import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { categories } from '@/utils/dict/categories'
import { ContentType } from '@/utils/enums/common'

import { ContentBlockDate } from './content-block-date'
import { ContentBlockTag } from './content-block-tag'
import { Rating } from './rating'

type ContentBlockType = {
    id: number
    type: ContentType
    name: string
    imageUrl: string | null
    year: number
    avgRating: number
    reviewsCount: number
}

export const ContentBlock = ({ id, type, name, imageUrl, year, avgRating }: ContentBlockType) => {
    return (
        <div className="flex flex-col rounded bg-white shadow-sm">
            <Link href={`/content/${type.toLowerCase()}/${id}`}>
                <ImageWithFallback
                    src={imageUrl || ''}
                    width={300}
                    height={200}
                    className="aspect-video h-auto w-auto rounded-t align-top"
                    alt={name}
                />
            </Link>

            <div className="flex h-full flex-col justify-between gap-y-3 p-3">
                <div className="flex items-start justify-between gap-x-4">
                    <div className="flex flex-col gap-y-1">
                        <Link
                            href={`/content/${type.toLowerCase()}/${id}`}
                            className="line-clamp-2 font-semibold text-black no-underline! hover:text-blue-500!"
                        >
                            {name}
                        </Link>

                        {/* <div className="text-sm">Author</div> */}
                    </div>

                    <Rating value={avgRating} className="size-12 flex-shrink-0" />
                </div>

                <hr className="m-0! border-gray-200! opacity-100!" />

                <div className="flex items-center justify-between">
                    <ContentBlockTag
                        link={`/content/${type.toLowerCase()}`}
                        title={categories.find(category => category.type === type.toLowerCase())?.label || ''}
                    />
                    <ContentBlockDate year={year} />
                </div>
            </div>
        </div>
    )
}
