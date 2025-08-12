type GroupFactsProps = {
    facts: string[]
}

export const GroupFacts = ({ facts }: GroupFactsProps) => {
    return (
        <ul className="list-disc space-y-2 pl-6">
            {facts.map((fact, index) => (
                <li key={`content-fact-${index}`}>{fact}</li>
            ))}
        </ul>
    )
}
