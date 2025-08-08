import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'

type ComedianBlockType = {
    slug: string
    name: string
    surname: string
    isAgent: boolean
}

export const ComedianBlock = ({ slug, name, surname, isAgent }: ComedianBlockType) => {
    return (
        <Link href={`/comedians/${slug}`} className="flex flex-col gap-y-2" target="_blank">
            <ImageWithFallback
                src={`/images/comedians/${slug}.jpg`}
                width={100}
                height={100}
                className="aspect-square w-full rounded-lg"
                alt={`${name} ${surname}`}
            />

            <div className="font-semibold">
                {name} {surname}&nbsp;{isAgent && '*'}
            </div>
        </Link>
    )
}
