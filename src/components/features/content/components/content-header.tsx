type ContentTitleProps = {
    name: string
}

export const ContentTitle = ({ name }: ContentTitleProps) => {
    return <h1 className="mb-0! truncate text-center sm:!text-left">{name}</h1>
}
