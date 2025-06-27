import { ContentType } from '@/utils/enums/common'

import { ContentManyCategories } from './components/content-many-categories'
import { ContentManyFeed } from './components/content-many-feed'

type ContentManyProps = {
    slug: ContentType
}

export const ContentMany = ({ slug }: ContentManyProps) => {
    return (
        <div className="wrapper-lg py-8 sm:py-16">
            <div className="flex flex-col gap-y-4 sm:gap-y-8">
                <h1 className="mb-0!">Контент</h1>
                <ContentManyCategories slug={slug} />
                <ContentManyFeed type={slug} />
            </div>
        </div>
    )
}
