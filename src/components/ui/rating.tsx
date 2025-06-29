import classNames from 'classnames'

type RatingProps = {
    value: number
    className?: string
}

export const Rating = ({ value, className }: RatingProps) => {
    const getColor = (value: number) => {
        if (value === 0) return 'bg-gray-400'
        if (value >= 1 && value <= 3) return 'bg-red-400'
        if (value >= 4 && value <= 7) return 'bg-yellow-400'
        if (value >= 8 && value <= 10) return 'bg-green-400'
        return 'bg-gray-400'
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
