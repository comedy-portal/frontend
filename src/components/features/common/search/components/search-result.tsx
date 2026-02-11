'use client'

import { useEffect } from 'react'

import { ClapperboardIcon, UserIcon, UsersIcon } from 'lucide-react'
import { useDebounceCallback } from 'usehooks-ts'

import { messages } from '@/messages'
import { searchAPI } from '@/utils/redux/services/search/search.api'

import { SearchResultItem } from './search-result-item'

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

    if (isSuccess && items && items.comedians.length === 0 && items.groups.length === 0 && items.content.length === 0) {
        return (
            <div className="absolute top-full right-0 left-0 z-0 rounded-lg bg-white p-2 text-sm shadow">
                Ничего не найдено
            </div>
        )
    }

    if (isSuccess && items && isResultVisible) {
        return (
            <div className="absolute top-full right-0 left-0 z-0 rounded-lg bg-white p-1 shadow">
                {items.content.length > 0 && (
                    <div>
                        <div className="p-1 text-sm text-gray-300">Контент</div>
                        {items.content.map(item => (
                            <SearchResultItem
                                key={`search-result-item-content-${item.id}`}
                                title={item.name}
                                icon={<ClapperboardIcon size={20} />}
                                href={`/content/${item.type.toLowerCase()}/${item.id}`}
                                hideResults={hideResults}
                            />
                        ))}
                    </div>
                )}

                {items.comedians.length > 0 && (
                    <div>
                        <div className="p-1 text-sm text-gray-300">Комики</div>
                        {items.comedians.map(item => (
                            <SearchResultItem
                                key={`search-result-item-comedian-${item.slug}`}
                                title={`${item.name} ${item.surname}${item.isAgent ? '\u00A0*' : ''}`}
                                icon={<UserIcon size={20} strokeWidth={2.5} />}
                                href={`/comedians/${item.slug}`}
                                hideResults={hideResults}
                            />
                        ))}
                    </div>
                )}

                {items.groups.length > 0 && (
                    <div>
                        <div className="p-1 text-sm text-gray-300">Группы</div>
                        {items.groups.map(item => (
                            <SearchResultItem
                                key={`search-result-item-group-${item.slug}`}
                                title={item.name}
                                icon={<UsersIcon size={20} />}
                                href={`/comedians/groups/${item.slug}`}
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
