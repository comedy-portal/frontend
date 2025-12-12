type ComedianFactsProps = {
    facts: string[]
}

export const ComedianFacts = ({ facts }: ComedianFactsProps) => {
    return (
        <ul className="list-disc space-y-2 pl-6">
            {facts.map((fact, index) => (
                <li key={`content-fact-${index}`} dangerouslySetInnerHTML={{ __html: fact }}></li>
            ))}
        </ul>
    )
}
