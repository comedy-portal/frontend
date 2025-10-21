import { Metadata } from 'next'

import { AboutUs } from '@/components/features/about/about-us'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Кто мы?',
}

export default function AboutUsPage() {
    return <AboutUs />
}
