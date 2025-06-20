import { ContentType } from '@/utils/enums/common'

import { ContentManyFeed } from './components/content-many-feed'
import { ContentManyHeader } from './components/content-many-header'

type ContentManyProps = {
    slug: ContentType
}

export const ContentMany = ({ slug }: ContentManyProps) => {
    return (
        <div>
            <ContentManyHeader slug={slug} />
            <div className="container py-12">
                <ContentManyFeed type={slug} />
            </div>
        </div>
    )
}
