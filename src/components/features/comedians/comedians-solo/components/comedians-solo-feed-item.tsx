import Image from 'next/image'
import Link from 'next/link'

type ComediansSoloFeedItemType = {
    slug: string
    name: string
    surname: string
}

export const ComediansSoloFeedItem = ({ slug, name, surname }: ComediansSoloFeedItemType) => {
    return (
        <Link
            href={`/comedians/${slug}`}
            className="flex flex-col gap-y-2 text-black no-underline! hover:text-blue-500!"
        >
            <Image
                src={`/images/comedians/${slug}.jpg`}
                alt={`${name} ${surname}`}
                width={100}
                height={100}
                className="aspect-square w-full rounded"
            />

            <div className="text-sm font-semibold">
                {name} {surname}
            </div>
        </Link>
    )
}
