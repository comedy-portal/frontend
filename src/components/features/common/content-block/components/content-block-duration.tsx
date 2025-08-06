import { ClockIcon } from 'lucide-react'

type ContentBlockDurationProps = {
    duration: number | null // duration in minutes
}

const formatDuration = (duration: number): string => {
    const hours = Math.floor(duration / 60)
    const minutes = duration % 60

    if (hours > 0) {
        return `${hours} ч${minutes > 0 ? ` ${minutes} мин.` : ''}`
    }

    return `${minutes} мин.`
}

export const ContentBlockDuration = ({ duration }: ContentBlockDurationProps) => {
    if (duration === null) {
        return null
    }

    return (
        <div className="flex items-center gap-x-1 text-xs text-nowrap text-gray-500">
            <ClockIcon size={16} />
            {formatDuration(duration)}
        </div>
    )
}
