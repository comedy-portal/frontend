type ContentFactsProps = {
    id: number
    name: string
    surname: string
    slug: string
    isAgent: boolean
}

export const ContentAuthor = (props: ContentFactsProps) => {
    return (
        <div>
            {props.name} {props.surname}
        </div>
    )
}
