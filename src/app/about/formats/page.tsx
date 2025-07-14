import { Metadata } from 'next'

import { AboutFormats } from '@/components/features/about/about-formats'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Разбираемся в форматах - Comedy Portal',
}

export default function AboutFormatsPage() {
    return <AboutFormats />
}
