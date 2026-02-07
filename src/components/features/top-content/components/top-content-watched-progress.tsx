type TopContentWatchedProgressProps = {
    total: number
    watchedCount: number
}

export const TopContentWatchedProgress = ({ total, watchedCount }: TopContentWatchedProgressProps) => {
    const progress = total > 0 ? (watchedCount / total) * 100 : 0

    const getColor = (progress: number) => {
        if (progress <= 33) return 'bg-red-400'
        if (progress <= 66) return 'bg-yellow-400'
        return 'bg-green-400'
    }

    const progressColor = getColor(progress)

    return (
        <div className="space-y-1">
            <div className="text-xs text-gray-500 uppercase">
                Просмотрено {watchedCount} из {total}
            </div>
            <div className="h-2 w-full overflow-hidden rounded-lg bg-gray-300">
                <div
                    className={`h-full transition-all duration-500 ${progressColor}`}
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    )
}
