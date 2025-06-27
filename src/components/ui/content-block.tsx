import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { categories } from '@/utils/dict/categories'
import { ContentType } from '@/utils/enums/common'

import { ContentDate } from './content-date'
import { ContentRating } from './content-rating'
import { ContentTag } from './content-tag'

type ContentBlockType = {
    id: number
    type: ContentType
    name: string
    imageUrl: string | null
    year: number
    avgRating: number
    reviewsCount: number
}

export const ContentBlock = ({ id, type, name, imageUrl, year, avgRating, reviewsCount }: ContentBlockType) => {
    return (
        <div className="m-0 flex flex-col rounded bg-white shadow-sm">
            <Link href={`/content/${type.toLowerCase()}/${id}`}>
                <ImageWithFallback
                    src={imageUrl || ''}
                    width={300}
                    height={200}
                    className="aspect-video h-auto w-auto rounded-t align-top"
                    alt={name}
                />
            </Link>

            <div className="flex h-full flex-col justify-between gap-y-2 p-3">
                <Link
                    href={`/content/${type.toLowerCase()}/${id}`}
                    className="line-clamp-2 h-12 font-semibold text-black no-underline! hover:text-blue-500!"
                >
                    {name}
                </Link>

                <div className="flex items-center justify-between gap-x-2">
                    <div className="flex flex-wrap items-center gap-x-2">
                        <ContentDate year={year} />
                        <ContentRating avgRating={avgRating} reviewsCount={reviewsCount} />
                    </div>

                    <ContentTag
                        link={`/content/${type.toLowerCase()}`}
                        title={categories.find(category => category.type === type.toLowerCase())?.label || ''}
                    />
                </div>
            </div>
        </div>
    )
}
