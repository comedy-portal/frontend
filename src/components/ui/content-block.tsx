import { CalendarIcon, HeartPlusIcon, StarIcon } from 'lucide-react'

import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
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
        <div className="m-0 flex flex-col rounded-lg bg-white shadow-xs">
            <Link href={`/content/${type.toLowerCase()}/${id}`}>
                <ImageWithFallback
                    src={imageUrl || ''}
                    width={300}
                    height={200}
                    className="aspect-video h-auto w-auto rounded-t-lg align-top"
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

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
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

                    <div className="cursor-pointer hover:text-blue-500">
                        <HeartPlusIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
