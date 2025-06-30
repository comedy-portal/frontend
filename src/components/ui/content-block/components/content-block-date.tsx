import { CalendarIcon } from 'lucide-react'

type ContentBlockDateProps = {
    year: number
}

export const ContentBlockDate = ({ year }: ContentBlockDateProps) => {
    return (
        <div className="flex items-center gap-x-2 text-sm text-gray-500">
            {year}
            <CalendarIcon size={16} />
        </div>
    )
}
