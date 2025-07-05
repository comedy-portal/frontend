import { Metadata } from 'next'

import { AboutAlpha } from '@/components/features/about/about-alpha'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Разбираемся в форматах - Comedy Portal',
}

export default function AboutAlphaPage() {
    return <AboutAlpha />
}
