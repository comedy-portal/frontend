import { ContentType } from '@/types/content'

import { ContentCategories } from './components/content-categories'
import { ContentFeed } from './components/content-feed'
import { ContentSortDropdown } from './components/content-sort-dropdown'

type ContentProps = {
    slug: ContentType
}

export const Content = ({ slug }: ContentProps) => {
    return (
        <div className="flex flex-col gap-y-12">
            <div>
                <div className="flex items-end justify-between">
                    <h1 className="mb-0 text-2xl font-bold">Контент</h1>
                    <ContentSortDropdown />
                </div>
                <hr />
                <ContentCategories currentType={slug} />
            </div>

            <ContentFeed type={slug} />
        </div>
    )
}
