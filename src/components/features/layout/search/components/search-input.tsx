'use client'

import { ChangeEvent } from 'react'

import { SearchIcon, XIcon } from 'lucide-react'

type SearchInputProps = {
    searchTerm: string
    isLoading: boolean
    onChange: (value: string) => void
    onClear: () => void
}

export const SearchInput = ({ searchTerm, onChange, onClear }: SearchInputProps) => {
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
                className="h-8 w-full rounded-lg bg-gray-700 px-9 text-sm text-gray-300 placeholder:text-gray-300 focus:bg-white focus:text-gray-950 focus:outline-none focus:placeholder:text-gray-950"
                placeholder="Найти..."
                onChange={handleChange}
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
