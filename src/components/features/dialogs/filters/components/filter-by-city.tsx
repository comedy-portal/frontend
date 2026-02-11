import classNames from 'classnames'

type FilterByCityProps = {
    value: string | undefined
    onChange: (value: string) => void
}

export const FilterByCity = ({ value, onChange }: FilterByCityProps) => {
    const CITIES = [
        { value: 'Москва', label: 'Москва' },
        { value: 'Варшава', label: 'Варшава' },
    ]
    const DEFAULT_CITY = ''

    const displayValue = value ?? DEFAULT_CITY

    const handleClick = (city: string) => {
        onChange(displayValue === city ? DEFAULT_CITY : city)
    }

    return (
        <div className="flex flex-col gap-y-2">
            <label className="text-sm font-semibold">По городу:</label>

            <div className="flex flex-wrap gap-2">
                {CITIES.map(city => {
                    const active = displayValue === city.value

                    return (
                        <button
                            key={city.value}
                            type="button"
                            onClick={() => handleClick(city.value)}
                            className={classNames(
                                'cursor-pointer rounded px-3 py-1 text-xs transition',
                                active
                                    ? 'bg-gray-600 text-white'
                                    : 'bg-gray-200 text-gray-600 hover:bg-gray-500 hover:text-white',
                            )}
                        >
                            {city.label}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
