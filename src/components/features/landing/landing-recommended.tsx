import { getContentMany } from '@/services/content'
import { Order } from '@/types/common'
import { ContentSortBy } from '@/types/content'

import { LandingContentFeed } from './components/landing-content-feed'

export const LandingRecommended = async () => {
    const content = await getContentMany({
        sort_by: ContentSortBy.RATING,
        order: Order.DESC,
    })

    return <LandingContentFeed title="Рекомендуемое" items={content.items} />
}
