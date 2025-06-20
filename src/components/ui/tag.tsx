import Link from 'next/link'

type TagProps = {
    link: string
    title: string
}

export const Tag = ({ link, title }: TagProps) => {
    return (
        <Link
            href={link}
            className="inline-block rounded bg-gray-100 px-2 py-1 text-black! no-underline! hover:bg-gray-300"
        >
            {title}
        </Link>
    )
}
