import { ContentSortBy } from '@/redux/services/content/content.types'
import { getContentMany } from '@/services/content/content'
import { Order } from '@/utils/enums/common'

import { LandingContentFeed } from './components/landing-content-feed'

export const LandingNew = async () => {
    const content = await getContentMany({
        sort_by: ContentSortBy.DATE,
        order: Order.DESC,
        take: 4,
    })

    return <LandingContentFeed title="Новое видео" href="/content/special?sort=date_desc" items={content.items} />
}
