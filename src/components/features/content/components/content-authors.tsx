import Link from 'next/link'

type ContentAuthorsProps = {
    comedians: {
        id: number
        name: string
        surname: string
        slug: string
        isAgent: boolean
    }[]
    group: {
        id: number
        name: string
        slug: string
        groupImages: {
            id: number
            url: string
            copyright: string
            isCover: boolean
        }[]
    } | null
}

export const ContentAuthors = ({ comedians, group }: ContentAuthorsProps) => {
    return (
        <section className="space-y-2">
            <h3 className="font-bold">Авторы</h3>
            {group && (
                <Link
                    href={`/comedians/groups/${group.slug.toLowerCase()}`}
                    className="text-gray-500 hover:text-gray-950"
                >
                    {group.name}
                </Link>
            )}

            {comedians.map(comedian => (
                <div key={`content-author-${comedian.id}`}>
                    <Link
                        href={`/comedians/${comedian.slug.toLowerCase()}`}
                        className="text-gray-500 hover:text-gray-950"
                    >
                        {comedian.name} {comedian.surname}
                    </Link>
                </div>
            ))}
        </section>
    )
}
