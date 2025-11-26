import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'

type ComediansGroupsFeedItemType = {
    slug: string
    name: string
}

export const ComediansGroupsFeedItem = ({ slug, name }: ComediansGroupsFeedItemType) => {
    return (
        <Link href={`/comedians/groups/${slug}`} className="flex flex-col gap-y-2" target="_blank">
            <ImageWithFallback
                src={`/images/groups/${slug}.jpg`}
                alt={`${name}`}
                width={100}
                height={100}
                className="aspect-square w-full rounded-lg"
            />

            <div className="font-semibold">{name}</div>
        </Link>
    )
}
