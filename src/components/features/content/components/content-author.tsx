import { ContentAuthorGroup } from './content-author-group'
import { ContentAuthorMany } from './content-author-many'
import { ContentAuthorSingle } from './content-author-single'

type ContentFactsProps = {
    month: number | null
    year: number
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

export const ContentAuthor = ({ month, year, comedians, group }: ContentFactsProps) => {
    if (comedians.length > 1) {
        return <ContentAuthorMany comedians={comedians} month={month} year={year} />
    }

    if (group) {
        return <ContentAuthorGroup month={month} year={year} slug={group.slug} name={group.name} />
    }

    return (
        <ContentAuthorSingle
            name={comedians[0].name}
            surname={comedians[0].surname}
            slug={comedians[0].slug}
            month={month}
            year={year}
        />
    )
}
