import Image from 'next/image'

import { IContent } from '@/utils/types/content'

type ContentDescriptionProps = {
    content: IContent
}

export const ContentDescription = ({ content }: ContentDescriptionProps) => {
    return (
        <div className="space-y-4">
            <Image
                src={content.contentImages[0].url}
                width={500}
                height={500}
                className="aspect-video w-full rounded-lg object-cover"
                alt={content.name}
            />
            <div>{content.metaInfo?.description}</div>
        </div>
    )
}
