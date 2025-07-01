import Image from 'next/image'
import Link from 'next/link'

type ComedianBlockType = {
    slug: string
    name: string
    surname: string
}

export const ComedianBlock = ({ slug, name, surname }: ComedianBlockType) => {
    return (
        <Link href={`/comedians/${slug}`} className="flex flex-col gap-y-2 text-black hover:text-blue-500">
            <Image
                src={`/images/comedians/${slug}.jpg`}
                alt={`${name} ${surname}`}
                width={100}
                height={100}
                className="aspect-square w-full rounded-lg"
            />

            <div className="font-semibold">
                {name} {surname}
            </div>
        </Link>
    )
}
