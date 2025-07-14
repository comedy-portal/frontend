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
            <p>{duration} мин</p>
        </section>
    )
}
