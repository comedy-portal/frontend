import Link from 'next/link'

type ContentTagProps = {
    link: string
    title: string
}

export const ContentTag = ({ link, title }: ContentTagProps) => {
    return (
        <Link
            href={link}
            className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-black! uppercase no-underline! hover:bg-gray-300"
        >
            {title}
        </Link>
    )
}
