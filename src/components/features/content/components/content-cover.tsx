import Image from 'next/image'

type ContentCoverProps = {
    cover: string
    name: string
}

export const ContentCover = ({ cover, name }: ContentCoverProps) => {
    return (
        <Image
            src={cover}
            width={500}
            height={500}
            className="aspect-video w-full rounded-2xl object-cover"
            alt={name}
        />
    )
}
