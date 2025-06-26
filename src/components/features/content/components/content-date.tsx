import { getMonthNameRu } from '@/utils/helpers/common'

type ContentDateProps = {
    month: number | null
    year: number
}

export const ContentDate = ({ month, year }: ContentDateProps) => {
    return (
        <div className="flex gap-x-1 text-gray-500">
            {month && getMonthNameRu(month)} {year}
        </div>
    )
}
