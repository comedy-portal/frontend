import { ContentType } from '@/utils/enums/common'

import { ContentAuthorGroup } from './content-author-group'
import { ContentAuthorMany } from './content-author-many'
import { ContentAuthorSingle } from './content-author-single'

type ContentFactsProps = {
    month: number | null
    year: number
    type: ContentType
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

export const ContentAuthor = ({ month, year, type, comedians, group }: ContentFactsProps) => {
    if (comedians.length > 1) {
        return <ContentAuthorMany comedians={comedians} type={type} month={month} year={year} />
    }

    if (group) {
        return <ContentAuthorGroup name={group.name} slug={group.slug} type={type} month={month} year={year} />
    }

    return (
        <ContentAuthorSingle
            name={comedians[0].name}
            surname={comedians[0].surname}
            slug={comedians[0].slug}
            type={type}
            month={month}
            year={year}
        />
    )
}
