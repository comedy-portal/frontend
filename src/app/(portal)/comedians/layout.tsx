import type { Metadata } from 'next/types'

import { Comedians } from '@/components/features/comedians/comedians'

export const metadata: Metadata = {
    robots: 'noindex, nofollow',
}

export default function ComediansLayout(props: { children: React.ReactNode }) {
    return <Comedians>{props.children}</Comedians>
}
