type ContentDescriptionProps = {
    description?: string | null
}

export const ContentDescription = ({ description }: ContentDescriptionProps) => {
    if (!description) {
        return null
    }

    return <div>{description}</div>
}
