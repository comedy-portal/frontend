import { Metadata } from 'next'

import { Articles } from '@/components/features/articles/articles'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Статьи',
}

export default function ArticlesPage() {
    return <Articles />
}
