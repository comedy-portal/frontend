type ContentFactsProps = {
    facts: string[]
}

export const ContentFacts = ({ facts }: ContentFactsProps) => {
    return (
        <ul className="list-disc space-y-2 pl-6">
            {facts.map((fact, index) => (
                <li key={`content-facts-item-${index}`} dangerouslySetInnerHTML={{ __html: fact }} />
            ))}
        </ul>
    )
}
