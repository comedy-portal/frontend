import { getContentMany } from '@/services/content'

import { LandingContentFeed } from './components/landing-content-feed'

export const LandingNew = async () => {
    const content = await getContentMany({
        sort_by: 'date',
        order: 'desc',
    })

    return <LandingContentFeed title="Новое" items={content.items} />
}
