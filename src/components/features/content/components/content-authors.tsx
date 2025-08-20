import Link from 'next/link'

import { IComedianBaseData, IGroupBaseData } from '@/utils/types/common'

type ContentAuthorsProps = {
    comedians: IComedianBaseData[]
    group: IGroupBaseData | null
}

export const ContentAuthors = ({ comedians, group }: ContentAuthorsProps) => {
    return (
        <section className="space-y-2">
            <h3 className="font-bold">Авторы</h3>
            {group && (
                <Link
                    href={`/comedians/groups/${group.slug.toLowerCase()}`}
                    className="text-blue-500 hover:text-blue-700"
                >
                    {group.name}
                </Link>
            )}

            {comedians.map(comedian => (
                <div key={`content-author-${comedian.id}`}>
                    <Link
                        href={`/comedians/${comedian.slug.toLowerCase()}`}
                        className="text-blue-500 hover:text-blue-700"
                    >
                        {comedian.name} {comedian.surname}&nbsp;{comedian.isAgent ? '*' : ''}
                    </Link>
                </div>
            ))}
        </section>
    )
}
