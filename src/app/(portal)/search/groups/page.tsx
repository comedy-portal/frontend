import { Metadata } from 'next'

import { Search } from '@/components/features/search/search'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Поиск групп',
}

export default function SearchGroupsPage() {
    return <Search />
}
