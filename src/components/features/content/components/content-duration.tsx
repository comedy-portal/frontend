import { formatDuration } from '@/utils/helpers/common'

type ContentDurationProps = {
    duration: number | null
}

export const ContentDuration = ({ duration }: ContentDurationProps) => {
    if (duration === null) {
        return null
    }

    return (
        <section className="space-y-2">
            <h3 className="font-bold">Продолжительность</h3>
            <p>{formatDuration(duration)}</p>
        </section>
    )
}
