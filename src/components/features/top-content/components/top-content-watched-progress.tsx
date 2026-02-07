type TopContentWatchedProgressProps = {
    total: number
    watchedCount: number
}

export const TopContentWatchedProgress = ({ total, watchedCount }: TopContentWatchedProgressProps) => {
    const progress = total > 0 ? (watchedCount / total) * 100 : 0

    return (
        <div className="space-y-1">
            <div className="text-sm text-gray-400">
                Просмотрено {watchedCount} из {total}
            </div>
            <div className="h-3 w-full overflow-hidden rounded bg-gray-300">
                <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    )
}
