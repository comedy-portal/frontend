import { Paginator } from '@/components/ui/paginator'
import { IContent } from '@/types/content'

import { ContentCategories } from './components/content-categories'
import { ContentFeed } from './components/content-feed'
import { ContentSortDropdown } from './components/content-sort-dropdown'

type ContentProps = {
    total: number
    currentPage: number
    items: IContent[]
}

export const Content = ({ total, currentPage, items }: ContentProps) => {
    return (
        <div className="flex flex-col gap-y-12">
            <div>
                <div className="flex items-end justify-between">
                    <h1 className="mb-0 text-2xl font-bold">Контент</h1>
                    <ContentSortDropdown />
                </div>
                <hr />
                <ContentCategories />
            </div>
            <ContentFeed items={items} />
            <div className="flex justify-center">
                <Paginator pages={total} currentPage={currentPage} />
            </div>
        </div>
    )
}
