import type { Metadata } from 'next/types'

import { Legal } from '@/components/features/legal/legal'

export const metadata: Metadata = {
    robots: 'noindex, nofollow',
}

export default function LegalLayout(props: { children: React.ReactNode }) {
    return <Legal>{props.children}</Legal>
}
