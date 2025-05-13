import Link from 'next/link'

import { IContent } from '@/types/content'

import { ImageWithFallback } from './image-with-fallback'

type ContentBlock = {
    content: IContent
}

export const ContentBlock = ({ content }: ContentBlock) => {
    return (
        <div className="m-0 flex flex-col gap-y-2">
            <Link href={`/content/${content.id}`}>
                <ImageWithFallback
                    src={content.contentImages[0]?.url || ''}
                    width={300}
                    height={200}
                    className="aspect-video h-auto w-auto rounded-lg align-top"
                    alt={content.name}
                />
            </Link>

            <div>
                <Link href={`/content/${content.id}`} className="text-black no-underline!">
                    {content.name}
                </Link>
            </div>
        </div>
    )
}
