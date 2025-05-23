import Link from 'next/link'

import { ImageWithFallback } from './image-with-fallback'

type ContentBlockType = {
    id: number
    name: string
    imageUrl: string | null
}

export const ContentBlock = ({ id, name, imageUrl }: ContentBlockType) => {
    return (
        <div className="flex flex-col gap-y-2">
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
