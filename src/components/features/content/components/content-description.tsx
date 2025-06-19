type ContentDescriptionProps = {
    description?: string | null
}

export const ContentDescription = ({ description }: ContentDescriptionProps) => {
    if (!description) {
        return null
    }

    return (
        <section>
            <h2 className="mb-4! text-2xl!">О выступлении</h2>
            <div>{description}</div>
        </section>
    )
}
