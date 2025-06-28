import Image from 'next/image'

type ComediansFeedItemType = {
    slug: string
    name: string
    surname: string
}

export const ComediansFeedItem = ({ slug, name, surname }: ComediansFeedItemType) => {
    return (
        <div>
            <Image
                src={`/images/comedians/${slug}.jpg`}
                alt={`${name} ${surname}`}
                width={100}
                height={100}
                className="aspect-square w-full rounded"
            />
        </div>
    )
}
