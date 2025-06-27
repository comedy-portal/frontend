type ContentFactsProps = {
    facts?: string[] | null
}

export const ContentFacts = ({ facts }: ContentFactsProps) => {
    if (!facts || facts.length === 0) {
        return null
    }

    return (
        <section>
            <div className="mb-4">
                <h4 className="mb-2!">Факты</h4>
                <hr className="m-0 border-gray-200! opacity-100!" />
            </div>
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
