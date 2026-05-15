import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { assetsUrlBuilder } from '@/utils/helpers/assets-url-builder'

type ComedianBlockType = {
    slug: string
    name: string
    surname?: string
    type: 'comedians' | 'groups'
    isAgent?: boolean
}

export const ComedianBlock = ({ slug, name, surname, type, isAgent }: ComedianBlockType) => {
    const href = type === 'groups' ? `/comedians/groups/${slug}` : `/comedians/${slug}`

    return (
        <Link href={href} className="flex flex-col gap-y-2" target="_blank">
            <ImageWithFallback
                src={assetsUrlBuilder(type, `${slug}.jpg`)}
                width={100}
                height={100}
                className="aspect-square w-full rounded-lg"
                alt={`${name} ${surname ?? ''}`}
            />

            <div className="font-semibold">
                {name} {surname && surname}
                &nbsp;{isAgent && '*'}
            </div>
        </Link>
    )
}
