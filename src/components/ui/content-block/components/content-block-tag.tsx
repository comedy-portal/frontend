import Link from 'next/link'

type ContentBlockTagProps = {
    link: string
    title: string
}

export const ContentBlockTag = ({ link, title }: ContentBlockTagProps) => {
    return (
        <Link href={link} className="inline-block rounded bg-gray-200 px-3 py-1 text-xs text-gray-500">
            {title}
        </Link>
    )
}
