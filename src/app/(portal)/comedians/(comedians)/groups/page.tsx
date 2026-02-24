import { Metadata } from 'next'

import { ComediansGroups } from '@/components/features/comedians/comedians-groups/comedians-groups'
import { createMetadata } from '@/utils/helpers/metadata'

// prettier-ignore
export const metadata: Metadata = createMetadata({
    title: 'Группы комиков',
    description: 'Комедийные объединения, дуэты и команды стендап-комиков. Узнайте, какие группы создают лучшие шоу и спешлы на Камеди Портале.',
    path: '/comedians/groups',
    keywords: [
        'группы комиков',
        'комедийные команды',
        'стендап дуэты',
        'комедийные объединения',
        'командные шоу',
        'стендап коллективы',
        'юмор',
        'Камеди Портал',
    ],
    type: 'website',
})

export default function ComediansGroupsPage() {
    return <ComediansGroups />
}
