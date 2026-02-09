import RangeSlider from 'react-range-slider-input'

import 'react-range-slider-input/dist/style.css'

type FilterByRatingProps = {
    minRating: number
    maxRating: number
    onChange: (value: number[]) => void
}

export const FilterByRating = ({ minRating, maxRating, onChange }: FilterByRatingProps) => {
    return (
        <div className="flex flex-col gap-y-2">
            <label className="text-sm font-semibold">По рейтингу:</label>
            <div className="flex items-center justify-between gap-x-4">
                <div>{minRating}</div>
                <RangeSlider
                    min={0}
                    max={10}
                    step={1}
                    value={[minRating, maxRating]}
                    className="range"
                    onInput={onChange}
                />
                <div>{maxRating}</div>
            </div>
        </div>
    )
}
