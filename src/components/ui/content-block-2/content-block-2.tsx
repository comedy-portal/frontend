import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { Rating } from '@/components/ui/rating'
import { categories } from '@/utils/dict/categories'
import { ContentType } from '@/utils/enums/common'

import { ContentBlockAuthor } from './components/content-block-author'
import { ContentBlockDate } from './components/content-block-date'
import { ContentBlockTag } from './components/content-block-tag'

type ContentBlock2Type = {
    id: number
    type: ContentType
    name: string
    imageUrl: string | null
    year: number
    avgRating: number
    author?: {
        name: string
        url: string
    }
}

export const ContentBlock2 = ({ id, type, name, imageUrl, year, avgRating, author }: ContentBlock2Type) => {
    return (
        <div className="relative flex items-stretch">
            <div className="absolute top-0 right-0 rounded-bl-lg bg-white pb-1 pl-1">
                <Rating value={avgRating} className="size-12 text-xl" />
            </div>

            <Link href={`/content/${type.toLowerCase()}/${id}`} className="w-[288px]">
                <ImageWithFallback
                    src={imageUrl || ''}
                    width={288}
                    height={180}
                    className="aspect-video h-auto w-full rounded-l-lg object-cover"
                    alt={name}
                />
            </Link>

            <div className="flex flex-1 flex-col justify-between rounded-r-lg border-y border-r border-gray-300 p-6">
                <div>
                    {author && <ContentBlockAuthor name={author.name} url={author.url} />}
                    <Link href={`/content/${type.toLowerCase()}/${id}`} className="line-clamp-2 h-12 text-lg font-bold">
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
        </div>
    )
}
