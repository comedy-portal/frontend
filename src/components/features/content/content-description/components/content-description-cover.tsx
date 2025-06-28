import Image from 'next/image'

type ContentDescriptionCoverProps = {
    cover: string
    name: string
}

export const ContentDescriptionCover = ({ cover, name }: ContentDescriptionCoverProps) => {
    return (
        <Image src={cover} width={500} height={500} className="aspect-video w-full rounded object-cover" alt={name} />
    )
}
