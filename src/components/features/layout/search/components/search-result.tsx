'use client'

import { useEffect, useState } from 'react'

import { ClapperboardIcon, UserIcon, UsersIcon } from 'lucide-react'
import { useDebounceCallback } from 'usehooks-ts'

import { messages } from '@/messages'
import { searchAPI } from '@/redux/services/search/search.api'
import { ISearch } from '@/utils/types/search'

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
    const [items, setItems] = useState<ISearch | null>(null)
    const [search, { data, isFetching, isSuccess, isError }] = searchAPI.useLazySearchQuery()

    const debouncedSearch = useDebounceCallback(search, 500)

    useEffect(() => {
        if (searchTerm.length >= 3) {
            debouncedSearch({ query: searchTerm })
        }
    }, [debouncedSearch, searchTerm])

    useEffect(() => {
        setIsLoading(isFetching)
    }, [isFetching, setIsLoading])

    useEffect(() => {
        if (isSuccess && data && searchTerm.length >= 3) {
            setItems(data)
        } else {
            setItems(null)
        }
    }, [data, isSuccess, searchTerm])

    if (isError) {
        return <div className="p-3 text-sm text-red-500">{messages.COMMON_ERROR}</div>
    }

    if (isSuccess && items?.comedians.length === 0 && items?.groups.length === 0 && items?.content.length === 0) {
        return (
            <div className="absolute top-full right-0 left-0 z-0 rounded-lg bg-white p-2 text-sm shadow">
                Ничего не найдено
            </div>
        )
    }

    if (isSuccess && items && isResultVisible) {
        return (
            <div className="absolute top-full right-0 left-0 z-0 rounded-lg bg-white p-1 shadow">
                {items?.content.map(item => (
                    <div key={`search-result-item-content-${item.id}`}>
                        <div className="p-1 text-sm text-gray-300">Контент</div>
                        <SearchResultItem
                            title={item.name}
                            icon={<ClapperboardIcon size={20} />}
                            href={`/content/${item.type.toLowerCase()}/${item.id}`}
                            hideResults={hideResults}
                        />
                    </div>
                ))}
                {items?.comedians.map(item => (
                    <div key={`search-result-item-comedian-${item.slug}`}>
                        <div className="p-1 text-sm text-gray-300">Комики</div>
                        <SearchResultItem
                            title={`${item.name} ${item.surname}`}
                            icon={<UserIcon size={20} strokeWidth={2.5} />}
                            href={`/comedians/${item.slug}`}
                            hideResults={hideResults}
                        />
                    </div>
                ))}
                {items?.groups.map(item => (
                    <div key={`search-result-item-group-${item.slug}`}>
                        <div className="p-1 text-sm text-gray-300">Группы</div>
                        <SearchResultItem
                            title={item.name}
                            icon={<UsersIcon size={20} />}
                            href={`/comedians/groups/${item.slug}`}
                            hideResults={hideResults}
                        />
                    </div>
                ))}
            </div>
        )
    }

    return null
}
