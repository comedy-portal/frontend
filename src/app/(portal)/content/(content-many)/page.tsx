import { Metadata } from 'next'

import { ContentMany } from '@/components/features/content-many/content-many'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Контент - Comedy Portal',
}

export default function ContentManyPage() {
    return <ContentMany />
}
