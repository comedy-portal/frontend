import classNames from 'classnames'

type RatingProps = {
    value: number
    className?: string
    isHighlight?: boolean
    onClick?: () => void
}

export const Rating = ({ value, className, isHighlight, onClick }: RatingProps) => {
    const getColor = (value: number) => {
        if (value === 0) return 'gray'
        if (value >= 1 && value <= 3) return 'red'
        if (value > 3 && value <= 7) return 'yellow'
        if (value > 7 && value <= 10) return 'green'
        return 'gray'
    }

    const color = getColor(value)

    const bgColor = {
        gray: 'bg-gray-200',
        red: 'bg-red-400',
        yellow: 'bg-yellow-400',
        green: 'bg-green-400',
    }[color]

    const borderColor = {
        gray: 'border-gray-300 text-gray-500',
        red: 'border-red-400 text-red-500',
        yellow: 'border-yellow-400 text-yellow-500',
        green: 'border-green-400 text-green-500',
    }[color]

    return (
        <div
            className={classNames(
                'flex size-10 items-center justify-center rounded-lg text-lg font-bold transition-colors duration-200',
                isHighlight ? classNames('border-2 bg-white', borderColor) : classNames('text-white', bgColor),
                className,
            )}
            onClick={onClick}
        >
            {value === 0 ? '—' : value}
        </div>
    )
}
