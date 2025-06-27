import classNames from 'classnames'

type RatingProps = {
    value: number
    className?: string
}

export const Rating = ({ value, className }: RatingProps) => {
    const getColor = (value: number) => {
        if (value === 0) return 'bg-gray-400'
        if (value >= 1 && value <= 4) return 'bg-red-400'
        if (value >= 5 && value <= 6) return 'bg-yellow-400'
        if (value >= 7 && value <= 8) return 'bg-green-400'
        if (value >= 9 && value <= 10) return 'bg-green-600'
        return 'bg-gray-200'
    }

    return (
        <div
            className={classNames(
                'flex size-10 items-center justify-center rounded text-lg font-semibold text-white',
                getColor(value),
                className,
            )}
        >
            {value}
        </div>
    )
}
