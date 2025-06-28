import type { Metadata } from 'next/types'

import { About } from '@/components/features/about/about'

export const metadata: Metadata = {
    robots: 'noindex, nofollow',
}

export default function AboutLayout(props: { children: React.ReactNode }) {
    return <About>{props.children}</About>
}
