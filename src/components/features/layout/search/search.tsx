'use client'

import { RefObject, useRef, useState } from 'react'

import { useOnClickOutside } from 'usehooks-ts'

import { Keys } from '@/utils/enums/common'
import { useKeypress } from '@/utils/hooks/use-keypress'

import { SearchInput } from './components/search-input'
import { HeaderSearchResult } from './components/search-result'

type SearchProps = {
    closeMobileMenu?: () => void
}

export const Search = ({ closeMobileMenu }: SearchProps) => {
    const ref = useRef<HTMLDivElement>(null)

    const [searchTerm, setSearchTerm] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isResultVisible, setIsResultVisible] = useState<boolean>(false)

    useKeypress(Keys.ESCAPE, () => {
        setIsResultVisible(false)
    })

    // TODO: Consider switching to a different package or waiting for a fix
    // Issue: `useOnClickOutside` does not support a `null` ref
    // More details: https://github.com/juliencrn/usehooks-ts/issues/663
    useOnClickOutside(ref as RefObject<HTMLDivElement>, () => {
        setIsResultVisible(false)
    })

    const handleInputClick = () => {
        setIsResultVisible(true)
    }

    const handleInputClear = () => {
        setSearchTerm('')
        setIsResultVisible(false)
    }

    const hideResults = () => {
        setSearchTerm('')
        setIsResultVisible(false)
        closeMobileMenu?.()
    }

    return (
        <div className="relative lg:w-[300px]" ref={ref}>
            <SearchInput
                searchTerm={searchTerm}
                isLoading={isLoading}
                isResultVisible={isResultVisible}
                onChange={setSearchTerm}
                onClick={handleInputClick}
                onClear={handleInputClear}
            />

            <HeaderSearchResult
                searchTerm={searchTerm}
                isResultVisible={isResultVisible}
                setIsLoading={setIsLoading}
                hideResults={hideResults}
            />
        </div>
    )
}
