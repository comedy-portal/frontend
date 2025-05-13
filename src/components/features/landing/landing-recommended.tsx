import { getContentMany } from '@/services/content'

import { LandingContentFeed } from './components/landing-content-feed'

export const LandingRecommended = async () => {
    const content = await getContentMany({
        sort_by: 'rating',
        order: 'desc',
    })

    return <LandingContentFeed title="Рекомендуемое" items={content.items} />
}
