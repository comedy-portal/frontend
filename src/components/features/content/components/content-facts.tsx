type ContentFactsProps = {
    facts?: string[] | null
}

export const ContentFacts = ({ facts }: ContentFactsProps) => {
    if (!facts || facts.length === 0) {
        return null
    }

    return (
        <section>
            <h2 className="mb-4! text-2xl!">Факты</h2>
            <div className="space-y-4">
                {facts.map((fact, index) => (
                    <div key={`content-facts-item-${index}`} className="border-l-4 border-blue-200 pl-4">
                        {fact}
                    </div>
                ))}
            </div>
        </section>
    )
}
