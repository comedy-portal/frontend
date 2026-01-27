'use client'

import { useEffect } from 'react'

import { useSearchParams } from 'next/navigation'

import { Layout } from '@/components/features/layout/layout/layout'
import { searchAPI } from '@/redux/services/search/search.api'

import { SearchFeedComediansItem } from './components/search-feed-item'

export const Search = () => {
    const searchParams = useSearchParams()
    const searchTerm = searchParams.get('query') || ''

    const { data, isFetching, isSuccess, isError } = searchAPI.useSearchQuery({
        query: searchTerm.trim(),
    })

    return (
        <Layout
            title={`Результаты поиска по запросу "${searchTerm}"`}
            size="sm"
            nav={[
                {
                    label: `Контент (${data?.content.length || 0})`,
                    href: `/search/content?query=${encodeURIComponent(searchTerm)}`,
                },
                {
                    label: `Комики (${data?.comedians.length || 0})`,
                    href: `/search/comedians?query=${encodeURIComponent(searchTerm)}`,
                },
                {
                    label: `Группы (${data?.groups.length || 0})`,
                    href: `/search/groups?query=${encodeURIComponent(searchTerm)}`,
                },
            ]}
        >
            {data && data?.comedians.length > 0 && (
                <div>
                    {data.comedians.map(item => (
                        <SearchFeedComediansItem
                            key={`search-feed-comedian-item-${item.slug}`}
                            slug={item.slug}
                            name={item.name}
                            surname={item.surname}
                            type={'comedian'}
                        />
                    ))}
                </div>
            )}
        </Layout>
    )
}
