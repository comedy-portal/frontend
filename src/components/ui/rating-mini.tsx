import classNames from 'classnames'

type RatingMiniProps = {
    value: number
    className?: string
    onClick?: () => void
}

export const RatingMini = ({ value, className, onClick }: RatingMiniProps) => {
    const getColor = (value: number) => {
        if (value === 0) return 'border-gray-200'
        if (value >= 1 && value <= 3) return 'border-red-400'
        if (value > 3 && value <= 7) return 'border-yellow-400'
        if (value > 7 && value <= 10) return 'border-green-400'
        return 'border-gray-200'
    }

    return (
        <div
            className={classNames(
                'flex size-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold',
                'transition-colors duration-200',
                getColor(value),
                className,
            )}
            title="Моя оценка"
            onClick={onClick}
        >
            {value === 0 ? '—' : value}
        </div>
    )
}
