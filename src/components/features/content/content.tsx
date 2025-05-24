import { ContentType } from '@/utils/enums/common'

import { ContentFeed } from './components/content-feed'

type ContentProps = {
    slug: ContentType
}

export const Content = ({ slug }: ContentProps) => {
    return <ContentFeed type={slug} />
}
