'use client'

import { ChangeEvent } from 'react'

import classNames from 'classnames'
import { SearchIcon, XIcon } from 'lucide-react'

type SearchInputProps = {
    searchTerm: string
    isLoading: boolean
    isResultVisible: boolean
    onChange: (value: string) => void
    onClick?: () => void
    onClear: () => void
}

export const SearchInput = ({ searchTerm, isResultVisible, onChange, onClick, onClear }: SearchInputProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return (
        <div className="relative z-40">
            <div className="absolute top-1/2 left-2 -translate-y-1/2 transform text-gray-300">
                <SearchIcon size={20} absoluteStrokeWidth />
            </div>

            <input
                type="text"
                name="search"
                value={searchTerm}
                autoComplete="off"
                className={classNames(
                    'h-10 w-full rounded-lg bg-gray-700 px-9 text-sm text-gray-300 placeholder:text-gray-300 focus:bg-white focus:text-gray-950 focus:outline-none focus:placeholder:text-gray-950 lg:h-8',
                    {
                        'bg-white text-gray-950 placeholder:text-gray-950': isResultVisible,
                    },
                )}
                placeholder="Найти..."
                onChange={handleChange}
                onClick={onClick}
            />

            {searchTerm.length > 0 && (
                <div
                    className="absolute top-1/2 right-2 -translate-y-1/2 transform cursor-pointer text-gray-300"
                    onClick={onClear}
                >
                    <XIcon size={20} absoluteStrokeWidth />
                </div>
            )}
        </div>
    )
}
