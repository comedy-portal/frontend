import Image from 'next/image'

type ComedianProps = {
    name: string
    surname: string
    imageUrl: string | null
}

export const Comedian = ({ name, surname, imageUrl }: ComedianProps) => {
    return (
        <div>
            {imageUrl && (
                <Image src={imageUrl} width={300} height={200} className="aspect-video" alt={`${name} ${surname}`} />
            )}
        </div>
    )
}
