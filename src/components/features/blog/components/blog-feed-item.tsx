import { CalendarIcon } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'

import { ContentBlockDate } from '../../common/content-block/components/content-block-date'

type BlogFeedItemProps = {
    url: string
    date: string
    title: string
    description: string
    imageUrl: string
}

export const BlogFeedItem = ({ url, date, title, description, imageUrl }: BlogFeedItemProps) => {
    return (
        <div className="relative flex h-full flex-1 flex-col gap-y-4 rounded-lg bg-white p-4">
            <Link href={url} target="_blank">
                <ImageWithFallback
                    src={imageUrl}
                    width={254}
                    height={160}
                    className="aspect-video h-auto w-full rounded-lg align-top"
                    alt={title}
                />
            </Link>

            <Link href={url} className="line-clamp-2 max-h-12 font-bold" target="_blank">
                {title}
            </Link>
            <div className="text-sm" dangerouslySetInnerHTML={{ __html: description }} />
            <div className="flex items-center gap-x-2 text-sm text-gray-500">
                <CalendarIcon size={16} />
                {date}
            </div>
        </div>
    )
}
