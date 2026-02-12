import { useEffect, useMemo, useState } from 'react'
import RangeSlider from 'react-range-slider-input'

import classNames from 'classnames'

import 'react-range-slider-input/dist/style.css'

type YearPreset = {
    key: string
    label: string
    range: [number, number]
}

type FilterByDateProps = {
    currentYear: number
    value: [number | undefined, number | undefined]
    onChange: (range: [number, number]) => void
}

export const FilterByDate = ({ currentYear, value, onChange }: FilterByDateProps) => {
    const MIN_YEAR = 2010
    const MAX_YEAR = currentYear
    const DEFAULT_RANGE: [number, number] = [MIN_YEAR, MAX_YEAR]

    const yearPresets: YearPreset[] = useMemo(
        () => [
            { key: '1y', label: 'За год', range: [MAX_YEAR, MAX_YEAR] },
            { key: '2y', label: 'За 2 года', range: [MAX_YEAR - 1, MAX_YEAR] },
            { key: '3y', label: 'За 3 года', range: [MAX_YEAR - 2, MAX_YEAR] },
            { key: '5y', label: 'За 5 лет', range: [MAX_YEAR - 4, MAX_YEAR] },
            { key: '10y', label: 'За 10 лет', range: [MAX_YEAR - 9, MAX_YEAR] },
        ],
        [MAX_YEAR],
    )

    const displayRange = useMemo<[number, number]>(() => {
        const DEFAULT_RANGE: [number, number] = [2010, currentYear]
        return [value[0] ?? DEFAULT_RANGE[0], value[1] ?? DEFAULT_RANGE[1]]
    }, [value, currentYear])

    const activePreset = useMemo(() => {
        const matched = yearPresets.find(p => p.range[0] === displayRange[0] && p.range[1] === displayRange[1])
        return matched?.key ?? null
    }, [displayRange, yearPresets])

    const handlePresetClick = (preset: YearPreset) => {
        onChange(preset.range)
    }

    const handleSliderChange = (next: number[]) => {
        const range: [number, number] = [next[0], next[1]]
        onChange(range)
    }

    return (
        <div className="flex flex-col gap-y-3">
            <label className="text-sm font-semibold">По году выхода:</label>

            <div className="flex items-center gap-x-4">
                <div className="w-12 text-sm">{displayRange[0]}</div>

                <RangeSlider
                    min={MIN_YEAR}
                    max={MAX_YEAR}
                    step={1}
                    value={displayRange}
                    className="range"
                    onInput={handleSliderChange}
                />

                <div className="w-12 text-sm">{displayRange[1]}</div>
            </div>

            <div className="flex flex-wrap gap-2">
                {yearPresets.map(preset => (
                    <button
                        key={`filter-by-date-year-preset-${preset.key}`}
                        type="button"
                        onClick={() => handlePresetClick(preset)}
                        className={classNames(
                            'cursor-pointer rounded px-3 py-1 text-xs transition',
                            activePreset === preset.key
                                ? 'bg-gray-600 text-white'
                                : 'bg-gray-200 text-gray-600 hover:bg-gray-600 hover:text-white',
                        )}
                    >
                        {preset.label}
                    </button>
                ))}
            </div>
        </div>
    )
}
