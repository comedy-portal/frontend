import { CalendarIcon } from 'lucide-react'

type ContentDateProps = {
    year: number
}

export const ContentDate = ({ year }: ContentDateProps) => {
    return (
        <div className="flex items-center gap-x-2 text-sm">
            <CalendarIcon size={16} />
            {year}
        </div>
    )
}
