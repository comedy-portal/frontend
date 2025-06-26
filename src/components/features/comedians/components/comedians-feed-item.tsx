import Link from 'next/link'

type ComediansFeedItemType = {
    slug: string
    name: string
    surname: string
}

export const ComediansFeedItem = ({ slug, name, surname }: ComediansFeedItemType) => {
    return (
        <div className="flex items-center gap-x-4">
            <div className="flex flex-col items-start gap-y-1">
                <Link
                    href={`/comedians/${slug}`}
                    className="text-lg font-semibold text-black no-underline! hover:text-blue-500!"
                >
                    {name} {surname}
                </Link>
            </div>
        </div>
    )
}
