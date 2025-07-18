import { Metadata } from 'next'

import { TopSpecial2025 } from '@/components/features/top/special/2025/top-special-2025'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Топ-50 Специальных Выпусков - Comedy Portal',
}

export default function Top50Special2025Page() {
    return <TopSpecial2025 />
}
