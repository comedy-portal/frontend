import { IContent } from '@/types/content'

import { ContentCategories } from './components/content-categories'
import { ContentFeed } from './components/content-feed'
import { ContentSortDropdown } from './components/content-sort-dropdown'

type ContentProps = {
    items: IContent[]
}

export const Content = ({ items }: ContentProps) => {
    return (
        <div>
            <div className="flex items-end justify-between">
                <h1 className="mb-0 text-2xl font-bold">Контент</h1>
                <ContentSortDropdown />
            </div>
            <hr />
            <ContentCategories />
            <ContentFeed items={items} />
        </div>
    )
}
