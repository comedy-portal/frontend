import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'

type SearchFeedComediansItemProps = {
    slug: string
    name: string
    surname: string
    type: 'comedian' | 'group'
}

export const SearchFeedComediansItem = ({ slug, name, surname, type }: SearchFeedComediansItemProps) => {
    const href = type === 'group' ? `/comedians/groups/${slug}` : `/comedians/${slug}`

    return (
        <div className="flex gap-x-4 rounded-lg bg-white p-4">
            <Link href={href}>
                <ImageWithFallback
                    src={`/images/${type}s/${slug}.jpg`}
                    alt={name}
                    width={80}
                    height={80}
                    className="h-20 w-20 shrink-0 rounded-lg"
                />
            </Link>

            <Link href={href} className="mt-1 mb-2 inline-block align-top text-lg font-bold sm:mb-0">
                {name} {surname}
            </Link>
        </div>
    )
}
