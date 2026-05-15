import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { assetsUrlBuilder } from '@/utils/helpers/assets-url-builder'

type VenuesBlockType = {
    slug: string
    name: string
    city: string
}

export const VenuesBlock = ({ slug, name, city }: VenuesBlockType) => {
    return (
        <Link href={`/venues/${slug}`} className="flex flex-col gap-y-2">
            <ImageWithFallback
                src={assetsUrlBuilder('venues', `${slug}.jpg`)}
                width={100}
                height={100}
                className="aspect-square w-full rounded-lg object-cover"
                alt={name}
            />
            <div>
                <div className="text-gray-500">{city}</div>
                <div className="font-semibold">{name}</div>
            </div>
        </Link>
    )
}
