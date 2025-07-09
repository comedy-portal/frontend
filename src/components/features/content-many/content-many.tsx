import { ContentType } from '@/utils/enums/common'

import { ContentManyFeed } from './components/content-many-feed'

type ContentManyProps = {
    slug?: ContentType
}

export const ContentMany = ({ slug }: ContentManyProps) => {
    return <ContentManyFeed type={slug} />
}
