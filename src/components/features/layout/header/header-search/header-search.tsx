'use client'

import { ChangeEvent, useState } from 'react'

import { SearchIcon, XIcon } from 'lucide-react'

export const HeaderSearch = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const handleInputClear = () => {
        setSearchTerm('')
    }

    return (
        <div className="relative w-[330px]">
            <div className="absolute top-1/2 left-4 -translate-y-1/2 transform">
                <SearchIcon size={16} absoluteStrokeWidth />
            </div>

            <input
                type="text"
                name="search"
                value={searchTerm}
                autoComplete="off"
                className="h-8 w-full rounded-full bg-white px-10 text-sm focus:outline-none"
                placeholder="Поиск..."
                onChange={handleChange}
            />

            {searchTerm.length > 0 && (
                <div
                    className="absolute top-1/2 right-4 -translate-y-1/2 transform cursor-pointer"
                    onClick={handleInputClear}
                >
                    <XIcon size={16} absoluteStrokeWidth />
                </div>
            )}
        </div>
    )
}
