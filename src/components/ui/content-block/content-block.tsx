import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { Rating } from '@/components/ui/rating'
import { RatingMini } from '@/components/ui/rating-mini'
import { categories } from '@/utils/dict/categories'
import { ContentType } from '@/utils/enums/common'

import { ContentBlockDate } from './components/content-block-date'
import { ContentBlockTag } from './components/content-block-tag'

type ContentBlockType = {
    id: number
    type: ContentType
    name: string
    imageUrl: string | null
    year: number
    avgRating: number
    myRating?: number
    author?: {
        name: string
        url: string
    }
}

export const ContentBlock = ({ id, type, name, imageUrl, year, avgRating, myRating, author }: ContentBlockType) => {
    return (
        <div className="relative">
            <Link href={`/content/${type.toLowerCase()}/${id}`}>
                <div className="absolute top-0 right-0 rounded-bl-lg bg-white pb-1 pl-1">
                    <Rating value={avgRating} className="size-12 text-xl" />
                </div>

                <ImageWithFallback
                    src={imageUrl || ''}
                    width={254}
                    height={160}
                    className="aspect-video h-auto w-auto rounded-t-lg align-top"
                    alt={name}
                />
            </Link>

            <div className="flex flex-col gap-y-4 rounded-b-lg border-x border-b border-[#DFE2E6] p-4">
                <div>
                    {author && <div className="text-sm">{author.name}</div>}
                    <Link href={`/content/${type.toLowerCase()}/${id}`} className="line-clamp-2 h-12 font-bold">
                        {name}
                    </Link>
                </div>
                <div className="flex items-center justify-between">
                    <ContentBlockTag
                        link={`/content/${type.toLowerCase()}`}
                        title={categories.find(category => category.type === type.toLowerCase())?.label || ''}
                    />
                    <div className="flex items-center gap-x-2">
                        <ContentBlockDate year={year} />
                        {myRating && <RatingMini value={myRating} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
