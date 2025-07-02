import Link from 'next/link'

type ContentBlockAuthorProps = {
    name: string
    url: string
}

export const ContentBlockAuthor = ({ name, url }: ContentBlockAuthorProps) => {
    return (
        <Link href={url} className="text-sm text-gray-700 hover:text-black">
            {name}
        </Link>
    )
}
