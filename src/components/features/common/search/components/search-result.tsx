'use client'

import { useEffect } from 'react'

import { useDebounceCallback } from 'usehooks-ts'

import Image from 'next/image'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { messages } from '@/messages'
import { searchAPI } from '@/utils/redux/services/search/search.api'

import { SearchResultItem } from './search-result-item'
import { SearchResultItemContent } from './search-result-item-content'
import { SearchResultItemVenue } from './search-result-item-venue'

type HeaderSearchResultProps = {
    searchTerm: string
    isResultVisible: boolean
    setIsLoading: (loading: boolean) => void
    hideResults: () => void
}

export const HeaderSearchResult = ({
    searchTerm,
    isResultVisible,
    setIsLoading,
    hideResults,
}: HeaderSearchResultProps) => {
    const [search, { data, isFetching, isSuccess, isError }] = searchAPI.useLazySearchQuery()

    const debouncedSearch = useDebounceCallback(search, 500)

    useEffect(() => {
        if (searchTerm.trim().length >= 3) {
            debouncedSearch({ query: searchTerm.trim() })
        }
    }, [debouncedSearch, searchTerm])

    useEffect(() => {
        setIsLoading(isFetching)
    }, [isFetching, setIsLoading])

    const items = isSuccess && data && searchTerm.length >= 3 ? data : null

    if (isError) {
        return <div className="p-3 text-sm text-red-500">{messages.COMMON_ERROR_MESSAGE}</div>
    }

    if (
        isSuccess &&
        items &&
        items.comedians.length === 0 &&
        items.groups.length === 0 &&
        items.content.length === 0 &&
        items.venues.length === 0
    ) {
        return (
            <div className="absolute top-0 right-0 left-0 z-0 rounded-lg bg-white px-2 pt-15 pb-5 text-center text-sm text-gray-500 shadow">
                Ничего не найдено
            </div>
        )
    }

    if (isSuccess && items && isResultVisible) {
        return (
            <div className="absolute top-0 right-0 left-0 z-0 rounded-lg bg-white p-2 pt-10 shadow">
                {items.content.length > 0 && (
                    <div>
                        <div className="p-2 text-sm text-gray-500">Контент</div>
                        {items.content.map(item => (
                            <SearchResultItemContent
                                key={`search-result-item-content-${item.id}`}
                                id={item.id}
                                name={item.name}
                                type={item.type}
                                year={item.year}
                                imageUrl={item.contentImages[0]?.url}
                                avgRating={item.rating.avgRating}
                                hideResults={hideResults}
                            />
                        ))}
                    </div>
                )}

                {items.comedians.length > 0 && (
                    <div>
                        <div className="p-2 text-sm text-gray-500">Комики</div>
                        {items.comedians.map(item => (
                            <SearchResultItem
                                key={`search-result-item-comedian-${item.slug}`}
                                title={`${item.name} ${item.surname}${item.isAgent ? '\u00A0*' : ''}`}
                                icon={
                                    <ImageWithFallback
                                        src={`/images/comedians/${item.slug}.jpg`}
                                        width={32}
                                        height={32}
                                        className="size-8 rounded"
                                        alt={item.name}
                                    />
                                }
                                href={`/comedians/${item.slug}`}
                                hideResults={hideResults}
                            />
                        ))}
                    </div>
                )}

                {items.groups.length > 0 && (
                    <div>
                        <div className="p-2 text-sm text-gray-500">Группы</div>
                        {items.groups.map(item => (
                            <SearchResultItem
                                key={`search-result-item-group-${item.slug}`}
                                title={item.name}
                                icon={
                                    <ImageWithFallback
                                        src={`/images/groups/${item.slug}.jpg`}
                                        width={32}
                                        height={32}
                                        className="rounded"
                                        alt={item.name}
                                    />
                                }
                                href={`/comedians/groups/${item.slug}`}
                                hideResults={hideResults}
                            />
                        ))}
                    </div>
                )}

                {items.venues.length > 0 && (
                    <div>
                        <div className="p-2 text-sm text-gray-500">Площадки</div>
                        {items.venues.map(item => (
                            <SearchResultItemVenue
                                key={`search-result-item-venue-${item.slug}`}
                                name={item.name}
                                city={item.city}
                                address={item.address}
                                slug={item.slug}
                                hideResults={hideResults}
                            />
                        ))}
                    </div>
                )}
            </div>
        )
    }

    return null
}
