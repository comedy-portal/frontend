import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { categories } from '@/utils/dict/categories'
import { ContentType } from '@/utils/enums/common'

import { Rating } from '../rating'
import { ContentBlockDate } from './components/content-block-date'
import { ContentBlockTag } from './components/content-block-tag'

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
        <div className="flex flex-col gap-y-4 rounded bg-[#F5F6F7] p-4">
            <Link href={`/content/${type.toLowerCase()}/${id}`} className="relative">
                <div className="absolute top-0 right-0 rounded-bl bg-gray-100 pb-1 pl-1">
                    <Rating value={avgRating} className="size-12 text-xl" />
                </div>

                <ImageWithFallback
                    src={imageUrl || ''}
                    width={254}
                    height={160}
                    className="aspect-video h-auto w-auto rounded align-top"
                    alt={name}
                />
            </Link>

            <div>
                <div className="text-sm text-gray-700">Евгений Чебатков</div>
                <Link
                    href={`/content/${type.toLowerCase()}/${id}`}
                    className="line-clamp-2 h-12 font-semibold hover:text-blue-500"
                >
                    {name}
                </Link>
            </div>

            <div className="flex items-center justify-between">
                <ContentBlockTag
                    link={`/content/${type.toLowerCase()}`}
                    title={categories.find(category => category.type === type.toLowerCase())?.label || ''}
                />
                <ContentBlockDate year={year} />
            </div>
        </div>
    )
}
