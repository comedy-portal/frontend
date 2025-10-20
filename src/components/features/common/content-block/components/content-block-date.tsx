type ContentBlockDateProps = {
    year: number
}

export const ContentBlockDate = ({ year }: ContentBlockDateProps) => {
    return <div className="inline-block rounded bg-gray-200 px-3 py-1 text-xs text-gray-500">{year}</div>
}
