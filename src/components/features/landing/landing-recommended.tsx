import { getContentMany } from '@/services/content'
import { ContentSortBy, Order } from '@/utils/enums/common'

import { LandingContentFeed } from './components/landing-content-feed'

export const LandingRecommended = async () => {
    const content = await getContentMany({
        sort_by: ContentSortBy.RATING,
        order: Order.DESC,
        take: 8,
    })

    return <LandingContentFeed title="Рекомендуемое" items={content.items} />
}
