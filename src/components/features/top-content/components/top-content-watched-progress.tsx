type TopContentWatchedProgressProps = {
    total: number
    watchedCount: number
}

export const TopContentWatchedProgress = ({ total, watchedCount }: TopContentWatchedProgressProps) => {
    const progress = total > 0 ? (watchedCount / total) * 100 : 0

    return (
        <div className="space-y-1">
            <div className="text-xs text-gray-500 uppercase">
                Просмотрено {watchedCount} из {total}
            </div>
            <div className="h-2 w-full overflow-hidden rounded-lg bg-gray-300">
                <div className="h-full bg-blue-400 transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    )
}
