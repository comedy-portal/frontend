type ContentHeaderProps = {
    name: string
}

export const ContentHeader = ({ name }: ContentHeaderProps) => {
    return <h1 className="mb-0! truncate">{name}</h1>
}
