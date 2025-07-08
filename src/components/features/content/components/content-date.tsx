import { getMonthNameRu } from '@/utils/helpers/common'

type ContentDateProps = {
    month: number | null
    year: number
}

export const ContentDate = ({ month, year }: ContentDateProps) => {
    return (
        <section className="space-y-2">
            <h3 className="font-bold">Премьера</h3>
            <p>
                {month && getMonthNameRu(month)} {year}
            </p>
        </section>
    )
}
