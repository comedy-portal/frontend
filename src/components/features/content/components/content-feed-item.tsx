import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'

type ContentFeedItemType = {
    id: number
    name: string
    imageUrl: string | null
}

export const ContentFeedItem = ({ id, name, imageUrl }: ContentFeedItemType) => {
    return (
        <div className="flex gap-x-4 border-b border-gray-200 py-4 first:border-t">
            <ImageWithFallback
                src={imageUrl || ''}
                width={300}
                height={200}
                className="aspect-video w-32 rounded align-top"
                alt={name}
            />

            <div className="text-center font-bold uppercase">
                <Link href={`/content/${id}`} className="text-black no-underline!">
                    {name}
                </Link>
            </div>
        </div>
    )
}
