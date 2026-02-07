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
    value: [number | undefined, number | undefined]
    onChange: (range: [number, number]) => void
}

export const FilterByDate = ({ value, onChange }: FilterByDateProps) => {
    const MIN_YEAR = 2010
    const CURRENT_YEAR = 2026
    const DEFAULT_RANGE: [number, number] = [MIN_YEAR, CURRENT_YEAR]

    const makePreset = (years: number): YearPreset => ({
        key: `${years}y`,
        label: `За ${years} ${years === 1 ? 'год' : years < 5 ? 'года' : 'лет'}`,
        range: [CURRENT_YEAR - (years - 1), CURRENT_YEAR],
    })

    const yearPresets = useMemo(
        () => [makePreset(1), makePreset(2), makePreset(3), makePreset(5), makePreset(10)],
        [CURRENT_YEAR],
    )

    const displayRange: [number, number] = [value[0] ?? DEFAULT_RANGE[0], value[1] ?? DEFAULT_RANGE[1]]

    const invert = (year: number) => CURRENT_YEAR - (year - MIN_YEAR)

    const sliderValue: [number, number] = [invert(displayRange[1]), invert(displayRange[0])]

    const [activePreset, setActivePreset] = useState<string | null>(null)

    useEffect(() => {
        const matched = yearPresets.find(p => p.range[0] === displayRange[0] && p.range[1] === displayRange[1])
        setActivePreset(matched?.key ?? null)
    }, [displayRange, yearPresets])

    const handlePresetClick = (preset: YearPreset) => {
        setActivePreset(preset.key)
        onChange(preset.range)
    }

    const handleSliderChange = (next: number[]) => {
        const realMin = CURRENT_YEAR - (next[1] - MIN_YEAR)
        const realMax = CURRENT_YEAR - (next[0] - MIN_YEAR)

        const range: [number, number] = [realMin, realMax]
        onChange(range)

        const matched = yearPresets.find(p => p.range[0] === range[0] && p.range[1] === range[1])

        setActivePreset(matched?.key ?? null)
    }

    return (
        <div className="flex flex-col gap-y-3">
            <label className="text-sm font-semibold">По году:</label>

            <div className="flex items-center gap-x-4">
                <div className="w-12 text-sm">{displayRange[1]}</div>

                <RangeSlider
                    min={MIN_YEAR}
                    max={CURRENT_YEAR}
                    step={1}
                    value={sliderValue}
                    className="range"
                    onInput={handleSliderChange}
                />

                <div className="w-12 text-sm">{displayRange[0]}</div>
            </div>

            <div className="flex flex-wrap gap-2">
                {yearPresets.map(preset => (
                    <button
                        key={preset.key}
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
