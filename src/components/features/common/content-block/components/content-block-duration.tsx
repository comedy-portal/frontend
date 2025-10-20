import { ClockIcon } from 'lucide-react'

type ContentBlockDurationProps = {
    duration: number | null
}

const formatDuration = (duration: number): string => {
    const hours = Math.floor(duration / 60)
    const minutes = duration % 60

    const formattedHours = hours.toString().padStart(2, '0')
    const formattedMinutes = minutes.toString().padStart(2, '0')

    return `${formattedHours}:${formattedMinutes}`
}

export const ContentBlockDuration = ({ duration }: ContentBlockDurationProps) => {
    if (duration === null) {
        return null
    }

    return (
        <div className="flex items-center gap-x-1 text-xs text-nowrap text-gray-500">
            <ClockIcon size={20} />
            {formatDuration(duration)}
        </div>
    )
}
