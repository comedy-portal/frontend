type ContentDescriptionProps = {
    description?: string | null
}

export const ContentDescription = ({ description }: ContentDescriptionProps) => {
    if (!description) {
        return null
    }

    return (
        <section>
            <div className="mb-4">
                <h4 className="mb-2!">О выступлении</h4>
                <hr className="m-0 border-gray-200! opacity-100!" />
            </div>
            <div>{description}</div>
        </section>
    )
}
