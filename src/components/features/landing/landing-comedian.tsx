import { getContentMany } from '@/services/content'
import { Order } from '@/types/common'
import { ContentSortBy } from '@/types/content'

import { LandingContentFeed } from './components/landing-content-feed'

export const LandingComedian = async () => {
    const content = await getContentMany({
        sort_by: ContentSortBy.DATE,
        order: Order.DESC,
    })

    const items = content.items.map(item => ({
        id: item.id,
        name: item.name,
        image: item.contentImages[0].url,
    }))

    return <LandingContentFeed title="Комики" items={items} />
}
