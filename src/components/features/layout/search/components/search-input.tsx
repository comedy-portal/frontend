'use client'

import { ChangeEvent } from 'react'

import { SearchIcon, XIcon } from 'lucide-react'

type SearchInputProps = {
    searchTerm: string
    isLoading: boolean
    onChange: (value: string) => void
    onClick: () => void
    onClear: () => void
}

export const SearchInput = ({ searchTerm, isLoading, onChange, onClick, onClear }: SearchInputProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return (
        <div className="relative z-40">
            <div className="absolute top-1/2 left-4 -translate-y-1/2 transform">
                <SearchIcon size={16} absoluteStrokeWidth />
            </div>

            <input
                type="text"
                name="search"
                value={searchTerm}
                autoComplete="off"
                className="h-8 w-full rounded-lg bg-white px-10 text-sm focus:border focus:border-gray-950 focus:outline-none"
                placeholder="Поиск..."
                onChange={handleChange}
                onClick={onClick}
            />

            {searchTerm.length > 0 && (
                <div className="absolute top-1/2 right-4 -translate-y-1/2 transform cursor-pointer" onClick={onClear}>
                    <XIcon size={16} absoluteStrokeWidth />
                </div>
            )}
        </div>
    )
}
