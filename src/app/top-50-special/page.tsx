import { Metadata } from 'next'

import { TopSpecial } from '@/components/features/top/special/top-special'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Топ-50 Специальных Выпусков - Comedy Portal',
}

export default function Top50SpecialPage() {
    return <TopSpecial />
}
