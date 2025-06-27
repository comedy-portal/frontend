import { ContentSortBy } from '@/redux/services/content/content.types'
import { getContentMany } from '@/services/content'
import { Order } from '@/utils/enums/common'

import { LandingContentFeed } from './components/landing-content-feed'

export const LandingRecommended = async () => {
    const content = await getContentMany({
        sort_by: ContentSortBy.RATING,
        order: Order.DESC,
        take: 4,
    })

    return <LandingContentFeed title="Рекомендуемое" href="/content/special?sort=rating_desc" items={content.items} />
}
