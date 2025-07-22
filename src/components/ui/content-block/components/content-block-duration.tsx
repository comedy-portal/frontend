import { ClockIcon } from 'lucide-react'

type ContentBlockDurationProps = {
    duration: number | null
}

export const ContentBlockDuration = ({ duration }: ContentBlockDurationProps) => {
    if (duration === null) {
        return null
    }

    return (
        <div className="flex items-center gap-x-1 text-sm text-nowrap text-gray-500">
            <ClockIcon size={16} />
            {duration} мин.
        </div>
    )
}
