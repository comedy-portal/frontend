import { Metadata } from 'next'

import { Search } from '@/components/features/search/search'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Поиск комиков',
}

export default async function SearchComediansPage() {
    return <Search />
}
