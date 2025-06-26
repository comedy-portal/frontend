import { ContentType } from '@/utils/enums/common'

import { ContentManyCategories } from './content-many-categories'
import { ContentManySortDropdown } from './content-many-sort-dropdown'

type ContentManyHeaderProps = {
    slug: ContentType
}

export const ContentManyHeader = ({ slug }: ContentManyHeaderProps) => {
    return (
        <div className="border-b border-gray-200 bg-white py-12">
            <div className="container">
                <div className="flex items-end justify-between">
                    <h1 className="mb-0! text-2xl font-bold">Контент</h1>
                    <ContentManySortDropdown />
                </div>
                <hr />
                <ContentManyCategories slug={slug} />
            </div>
        </div>
    )
}
