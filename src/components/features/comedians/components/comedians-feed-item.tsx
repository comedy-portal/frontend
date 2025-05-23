import Link from 'next/link'

type ComediansFeedItemType = {
    slug: string
    name: string
    surname: string
    imageUrl: string | null
}

export const ComediansFeedItem = ({ slug, name, surname, imageUrl }: ComediansFeedItemType) => {
    return (
        <div className="flex gap-x-4 border-b border-gray-200 py-4 first:border-t">
            <div
                className="aspect-square w-32 rounded bg-gray-500 bg-cover bg-center bg-no-repeat align-top"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />

            <div className="text-center font-bold uppercase">
                <Link href={`/comedians/${slug}`} className="text-black no-underline!">
                    {name} {surname}
                </Link>
            </div>
        </div>
    )
}
