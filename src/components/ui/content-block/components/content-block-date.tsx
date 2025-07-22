import { CalendarIcon } from 'lucide-react'

type ContentBlockDateProps = {
    year: number
}

export const ContentBlockDate = ({ year }: ContentBlockDateProps) => {
    return (
        <div className="flex items-center gap-x-1 text-sm text-gray-500">
            <CalendarIcon size={16} />
            {year}
        </div>
    )
}
