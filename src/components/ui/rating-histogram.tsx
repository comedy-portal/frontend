import classNames from 'classnames'

type RatingHistogramProps = {
    ratings: number[]
    size?: number
}

export const RatingHistogram = ({ size = 144, ratings }: RatingHistogramProps) => {
    const maxCount = Math.max(...ratings)

    const getColor = (value: number) => {
        if (value === 0) return 'gray'
        if (value >= 1 && value <= 3) return 'red'
        if (value > 3 && value <= 7) return 'yellow'
        if (value > 7 && value <= 10) return 'green'
        return 'gray'
    }

    const bgColor = (value: number) => {
        const color = getColor(value)
        return {
            gray: 'bg-gray-200',
            red: 'bg-red-400',
            yellow: 'bg-yellow-400',
            green: 'bg-green-400',
        }[color]
    }

    return (
        <div className="flex w-full gap-1" style={{ height: size }}>
            {ratings.map((count, index) => {
                const rawHeight = maxCount > 0 ? (count / maxCount) * 100 : 0
                const heightPercent = rawHeight > 0 ? rawHeight : 5

                return (
                    <div
                        key={`rating-histogram-${index}`}
                        className="flex flex-1 flex-col items-center justify-end gap-y-2"
                    >
                        <div
                            className={classNames(
                                'w-1 rounded-t transition-all duration-300',
                                count !== 0 ? bgColor(index + 1) : 'bg-gray-300',
                            )}
                            style={{ height: `${heightPercent}%` }}
                        />
                        {/* <div className="text-sm font-semibold text-gray-500">{index + 1}</div> */}
                    </div>
                )
            })}
        </div>
    )
}
