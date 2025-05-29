import Image from 'next/image'

import { ContentType } from '@/utils/enums/common'

type ContentProps = {
    type: ContentType
    name: string
    imageUrl: string | null
}

export const Content = ({ imageUrl, name }: ContentProps) => {
    return (
        <div>{imageUrl && <Image src={imageUrl} width={300} height={200} className="aspect-video" alt={name} />}</div>
    )
}
