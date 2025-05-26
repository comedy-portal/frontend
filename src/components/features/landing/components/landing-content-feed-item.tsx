import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { ContentType } from '@/utils/enums/common'

type LandingContentFeedItemType = {
    id: number
    type: ContentType
    name: string
    imageUrl: string | null
}

export const LandingContentFeedItem = ({ id, type, name, imageUrl }: LandingContentFeedItemType) => {
    return (
        <div className="m-0 flex flex-col gap-y-2">
            <Link href={`/content/${type.toLocaleLowerCase()}/${id}`}>
                <ImageWithFallback
                    src={imageUrl || ''}
                    width={300}
                    height={200}
                    className="aspect-video h-auto w-auto rounded-lg align-top"
                    alt={name}
                />
            </Link>

            <div>
                <Link href={`/content/${type.toLocaleLowerCase()}/${id}`} className="text-black no-underline!">
                    {name}
                </Link>
            </div>
        </div>
    )
}
