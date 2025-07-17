'use client'

import { useRef, useState } from 'react'

import { SearchInput } from './components/search-input'
import { HeaderSearchResult } from './components/search-result'

type SearchProps = {
    closeMobileMenu?: () => void
}

export const Search = ({ closeMobileMenu }: SearchProps) => {
    const ref = useRef<HTMLDivElement>(null)

    const [searchTerm, setSearchTerm] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleInputClear = () => {
        setSearchTerm('')
    }

    const hideResults = () => {
        setSearchTerm('')
        closeMobileMenu?.()
    }

    return (
        <div className="relative sm:w-[330px]" ref={ref}>
            <SearchInput
                searchTerm={searchTerm}
                isLoading={isLoading}
                onChange={setSearchTerm}
                onClear={handleInputClear}
            />

            <HeaderSearchResult searchTerm={searchTerm} setIsLoading={setIsLoading} hideResults={hideResults} />
        </div>
    )
}
