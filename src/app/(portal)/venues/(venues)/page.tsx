import { Metadata } from 'next'

import { Venues } from '@/components/features/venues/venues'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Площадки',
}

export default function VenuesPage() {
    return <Venues />
}
