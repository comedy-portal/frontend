import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'

type ContentFeedItemType = {
    id: number
    name: string
    imageUrl: string | null
}

export const ContentFeedItem = ({ id, name, imageUrl }: ContentFeedItemType) => {
    return (
        <div className="m-0 flex flex-col gap-y-2">
            <Link href={`/content/${id}`}>
                <ImageWithFallback
                    src={imageUrl || ''}
                    width={300}
                    height={200}
                    className="aspect-video h-auto w-auto rounded-lg align-top"
                    alt={name}
                />
            </Link>

            <div>
                <Link href={`/content/${id}`} className="text-black no-underline!">
                    {name}
                </Link>
            </div>
        </div>
    )
}
