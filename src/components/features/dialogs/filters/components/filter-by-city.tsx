'use client'

import { RefObject, useEffect, useMemo, useRef, useState } from 'react'

import classNames from 'classnames'
import { ChevronDownIcon } from 'lucide-react'
import { useOnClickOutside } from 'usehooks-ts'

type FilterByCityProps = {
    cities: { value: string; label: string }[]
    value: string | undefined
    onChange: (value: string) => void
}

const DEFAULT_CITY = ''

export const FilterByCity = ({ cities, value, onChange }: FilterByCityProps) => {
    const rootRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [search, setSearch] = useState('')

    useOnClickOutside(rootRef as RefObject<HTMLDivElement>, () => setIsMenuOpen(false))

    useEffect(() => {
        setSearch(value ?? '')
    }, [value])

    const filteredCities = useMemo(() => {
        if (!search) return cities
        return cities.filter(c => c.label.toLowerCase().includes(search.toLowerCase()))
    }, [search, cities])

    const handleSelect = (city: string) => {
        onChange(city)
        setSearch(city)
        setIsMenuOpen(false)
        inputRef.current?.blur()
    }

    const handleChange = (v: string) => {
        setSearch(v)
        setIsMenuOpen(true)
        onChange(DEFAULT_CITY)
    }

    return (
        <div ref={rootRef} className="relative flex w-64 flex-col gap-y-2">
            <label className="text-sm font-semibold">По городу:</label>

            <div className="relative">
                <input
                    ref={inputRef}
                    value={search}
                    placeholder="Введите город..."
                    onFocus={() => setIsMenuOpen(true)}
                    onChange={e => handleChange(e.target.value)}
                    className={classNames(
                        'h-10 w-full rounded-lg border border-gray-300 bg-white px-4 pr-10 text-sm',
                        'hover:border-gray-400 focus:border-gray-400 focus:outline-none',
                    )}
                />

                <ChevronDownIcon
                    size={18}
                    className={classNames(
                        'pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 transition-transform',
                        isMenuOpen && 'rotate-180',
                    )}
                />
            </div>

            {isMenuOpen && (
                <div className="absolute top-full left-0 z-20 mt-1 flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white py-2 shadow-md">
                    <div className="max-h-60 overflow-auto">
                        {filteredCities.length === 0 && (
                            <div className="px-4 py-2 text-sm text-gray-400">Ничего не найдено</div>
                        )}

                        {filteredCities.map(city => {
                            const active = city.value === value

                            return (
                                <button
                                    key={city.value}
                                    type="button"
                                    onClick={() => handleSelect(city.value)}
                                    className={classNames(
                                        'flex w-full cursor-pointer items-center px-4 py-2 text-left text-sm transition',
                                        active
                                            ? 'bg-gray-100 text-gray-950'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-950',
                                    )}
                                >
                                    {city.label}
                                </button>
                            )
                        })}
                    </div>

                    {value && (
                        <>
                            <hr className="my-2 border-gray-100" />
                            <button
                                type="button"
                                onClick={() => {
                                    onChange(DEFAULT_CITY)
                                    setSearch('')
                                    setIsMenuOpen(false)
                                }}
                                className="cursor-pointer px-4 text-left text-sm text-gray-500 hover:text-gray-950"
                            >
                                Сбросить выбор
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}
