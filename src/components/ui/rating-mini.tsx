import classNames from 'classnames'

type RatingMiniProps = {
    value: number
    className?: string
    onClick?: () => void
}

export const RatingMini = ({ value, className, onClick }: RatingMiniProps) => {
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
                'flex size-8 shrink-0 items-center justify-center rounded-lg border-2 text-sm font-bold text-white',
                'bg-blue-400 transition-colors duration-200',
                // getColor(value),
                className,
            )}
            title="Моя оценка"
            onClick={onClick}
        >
            {value === 0 ? '—' : value}
        </div>
    )
}
