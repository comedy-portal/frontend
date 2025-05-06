import { getContentMany } from '@/services/content'
import { Order } from '@/types/common'
import { ContentSortBy } from '@/types/content'

import { LandingContentFeed } from './components/landing-content-feed'

export const LandingNew = async () => {
    const content = await getContentMany({
        sort_by: ContentSortBy.DATE,
        order: Order.DESC,
    })

    return <LandingContentFeed title="Новое" items={content.items} />
}
