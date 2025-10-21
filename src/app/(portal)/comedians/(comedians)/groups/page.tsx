import { Metadata } from 'next'

import { ComediansGroups } from '@/components/features/comedians/comedians-groups/comedians-groups'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Группы',
}

export default function ComediansGroupsPage() {
    return <ComediansGroups />
}
