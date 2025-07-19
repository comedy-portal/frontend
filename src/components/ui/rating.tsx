import classNames from 'classnames'

type RatingProps = {
    value: number
    className?: string
    onClick?: () => void
}

export const Rating = ({ value, className, onClick }: RatingProps) => {
    const getColor = (value: number) => {
        if (value === 0) return 'bg-gray-200'
        if (value >= 1 && value <= 3) return 'bg-red-400'
        if (value > 3 && value <= 7) return 'bg-yellow-400'
        if (value > 7 && value <= 10) return 'bg-green-400'
        return 'bg-gray-200'
    }

    return (
        <div
            className={classNames(
                'flex size-10 items-center justify-center rounded-lg text-lg font-bold text-white',
                'transition-colors duration-200',
                getColor(value),
                className,
            )}
            onClick={onClick}
        >
            {value === 0 ? '—' : value}
        </div>
    )
}
