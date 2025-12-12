import Image from 'next/image'
import Link from 'next/link'

type BlogFeedItemProps = {
    url: string
    date: string
    title: string
    description: string
    imageUrl: string
}

export const BlogFeedItem = ({ url, date, title, description, imageUrl }: BlogFeedItemProps) => {
    return (
        <div>
            <Link href={url}>
                <Image src={imageUrl} alt={title} width={360} height={190} className="mb-4 w-full rounded-lg" />
            </Link>
            <div className="mb-2 text-sm text-gray-500">{date}</div>
            <Link href={url} className="text-gray-700 hover:text-gray-950">
                <h2 className="mb-2 text-xl font-bold">{title}</h2>
            </Link>
            <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    )
}
