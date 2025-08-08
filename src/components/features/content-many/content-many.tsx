import { ContentType } from '@/utils/enums/common'

import { ContentManyFeed } from './components/content-many-feed'

type ContentManyProps = {
    slug?: ContentType
    isAuth: boolean
}

export const ContentMany = ({ slug, isAuth }: ContentManyProps) => {
    return <ContentManyFeed type={slug} isAuth={isAuth} />
}
