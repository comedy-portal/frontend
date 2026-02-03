import { ContentType } from '@/utils/enums/common'

import { ContentManyControls } from './components/content-many-controls/content-many-controls'
import { ContentManyFeed } from './components/content-many-feed'

type ContentManyProps = {
    slug?: ContentType
    isAuth: boolean
}

export const ContentMany = ({ slug, isAuth }: ContentManyProps) => {
    return (
        <div className="space-y-6">
            <ContentManyControls isAuth={isAuth} />
            <ContentManyFeed type={slug} isAuth={isAuth} />
        </div>
    )
}
