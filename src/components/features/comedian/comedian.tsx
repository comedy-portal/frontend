import Image from 'next/image'
import Link from 'next/link'

type ComedianProps = {
    name: string
    surname: string
    imageUrl: string | null
}

export const Comedian = ({ name, surname, imageUrl }: ComedianProps) => {
    return (
        <div className="flex flex-col gap-y-12">
            <nav className="flex gap-x-2">
                <Link href="/" className="text-blue-500 hover:underline">
                    Главная
                </Link>
                <span>|</span>
                <Link href="/comedians" className="text-blue-500 hover:underline">
                    Комики
                </Link>
                <span>|</span>
                <span>
                    {name} {surname}
                </span>
            </nav>

            {imageUrl && <Image src={imageUrl} width={300} height={200} className="aspect-video" alt={name} />}
        </div>
    )
}
