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
    setIsLoading: (loading: boolean) => void
    hideResults: () => void
}

export const HeaderSearchResult = ({ searchTerm, setIsLoading, hideResults }: HeaderSearchResultProps) => {
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

    if (isFetching) {
        return <div className="p-3 text-sm text-gray-500">Поиск ...</div>
    }

    if (isSuccess && items?.comedians.length === 0 && items?.groups.length === 0 && items?.content.length === 0) {
        return <div className="p-3 text-sm text-gray-500">Ничего не найдено</div>
    }

    if (isSuccess) {
        return (
            <>
                {items?.comedians.map(item => (
                    <SearchResultItem
                        key={`search-result-item-comedian-${item.slug}`}
                        title={`${item.name} ${item.surname}`}
                        icon={<UserIcon />}
                        href={`/comedians/${item.slug}`}
                        hideResults={hideResults}
                    />
                ))}
                {items?.groups.map(item => (
                    <SearchResultItem
                        key={`search-result-item-group-${item.slug}`}
                        title={item.name}
                        icon={<UsersIcon />}
                        href={`/comedians/groups/${item.slug}`}
                        hideResults={hideResults}
                    />
                ))}
                {items?.content.map(item => (
                    <SearchResultItem
                        key={`search-result-item-content-${item.id}`}
                        title={item.name}
                        icon={<ClapperboardIcon />}
                        href={`/content/${item.type.toLowerCase()}/${item.id}`}
                        hideResults={hideResults}
                    />
                ))}
            </>
        )
    }

    return <div className="p-3 text-sm text-gray-500">Попробуйте ввести имя комика, группы или название видео</div>
}
