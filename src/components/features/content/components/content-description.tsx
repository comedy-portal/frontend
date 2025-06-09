type ContentDescriptionProps = {
    description?: string | null
}

export const ContentDescription = ({ description }: ContentDescriptionProps) => {
    if (!description) {
        return null
    }

    return (
        <section className="flex flex-col gap-y-4">
            <h2 className="mb-0!">Описание</h2>
            <div className="mt-2">{description}</div>
        </section>
    )
}
