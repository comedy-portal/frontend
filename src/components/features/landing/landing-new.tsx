import { getContentMany } from '@/services/content'
import { ContentSortBy, Order } from '@/utils/enums/common'

import { LandingContentFeed } from './components/landing-content-feed'

export const LandingNew = async () => {
    const content = await getContentMany({
        sort_by: ContentSortBy.DATE,
        order: Order.DESC,
    })

    return <LandingContentFeed title="Новое" items={content.items} />
}
