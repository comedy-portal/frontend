import { CalendarIcon, HeartPlusIcon, StarIcon } from 'lucide-react'

import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { Tag } from '@/components/ui/tag'
import { categories } from '@/utils/dict/categories'
import { ContentType } from '@/utils/enums/common'

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
        <div className="m-0 flex flex-col rounded bg-white shadow-xs">
            <Link href={`/content/${type.toLowerCase()}/${id}`} className="relative">
                <ImageWithFallback
                    src={imageUrl || ''}
                    width={300}
                    height={200}
                    className="aspect-video h-auto w-auto rounded-t align-top"
                    alt={name}
                />
                <div className="absolute top-1 right-1 cursor-pointer rounded bg-blue-50 p-1 text-black hover:text-blue-500!">
                    <HeartPlusIcon />
                </div>
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
                        <div className="flex items-center gap-x-2 text-sm">
                            <CalendarIcon size={16} />
                            {year}
                        </div>
                        <div className="flex items-center gap-x-2 text-sm">
                            <StarIcon size={16} fill="rgb(245, 197, 24)" stroke="rgb(245, 197, 24)" />
                            <strong>
                                {avgRating} / {reviewsCount}
                            </strong>
                        </div>
                    </div>

                    <Tag
                        link={`/content/${type.toLowerCase()}`}
                        title={categories.find(category => category.type === type.toLowerCase())?.label || ''}
                    />
                </div>
            </div>
        </div>
    )
}
