import { Metadata } from 'next'

import { AboutRatings } from '@/components/features/about/about-ratings'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Как мы оцениваем - Comedy Portal',
}

export default function AboutRatingsPage() {
    return <AboutRatings />
}
