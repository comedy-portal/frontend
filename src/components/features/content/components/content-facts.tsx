type ContentFactsProps = {
    facts: string[] | null
}

export const ContentFacts = ({ facts }: ContentFactsProps) => {
    if (!facts || facts.length === 0) {
        return null
    }

    return (
        <section className="flex flex-col gap-y-4">
            <h2 className="mb-0!">Факты</h2>

            {facts.map((fact, index) => (
                <div key={`content-facts-item-${index}`} className="rounded border border-gray-300 p-3">
                    {fact}
                </div>
            ))}
        </section>
    )
}
