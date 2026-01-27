import { Metadata } from 'next'

import { Search } from '@/components/features/search/search'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Поиск контента',
}

export default async function SearchContentPage() {
    return <Search />
}
