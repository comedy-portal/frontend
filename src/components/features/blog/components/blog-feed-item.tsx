import { CalendarIcon } from 'lucide-react'

import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { formatDate } from '@/utils/helpers/common'

type BlogFeedItemProps = {
    slug: string
    date: string
    title: string
    description: string
    image: string
}

export const BlogFeedItem = ({ slug, date, title, description, image }: BlogFeedItemProps) => {
    return (
        <div className="relative flex h-full flex-1 flex-col gap-y-4 rounded-lg bg-white p-4">
            <Link href={`/blog/${slug}`}>
                <ImageWithFallback
                    src={image}
                    width={254}
                    height={160}
                    className="h-auto w-full rounded-lg align-top"
                    alt={title}
                />
            </Link>

            <div className="space-y-2">
                <Link
                    href={`/blog/${slug}`}
                    className="line-clamp-2 max-h-12 font-bold"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <div className="text-sm" dangerouslySetInnerHTML={{ __html: description }} />
                <div className="flex items-center gap-x-2 text-sm text-gray-500">
                    <CalendarIcon size={16} />
                    {formatDate(date)}
                </div>
            </div>
        </div>
    )
}
