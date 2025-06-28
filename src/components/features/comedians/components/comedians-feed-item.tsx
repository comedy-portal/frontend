import Image from 'next/image'

type ComediansFeedItemType = {
    slug: string
    name: string
    surname: string
    image: string
}

export const ComediansFeedItem = ({ name, surname, image }: ComediansFeedItemType) => {
    return (
        <div>
            <Image
                src={`/images/${image}`}
                alt={`${name} ${surname}`}
                width={100}
                height={100}
                className="aspect-square w-full rounded"
            />
        </div>
    )
}
