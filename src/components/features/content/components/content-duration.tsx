type ContentDurationProps = {
    duration: number | null
}

const formatDuration = (duration: number): string => {
    const hours = Math.floor(duration / 60)
    const minutes = duration % 60

    if (hours > 0) {
        return `${hours} ч${minutes > 0 ? ` ${minutes} мин.` : ''}`
    }

    return `${minutes} мин.`
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
