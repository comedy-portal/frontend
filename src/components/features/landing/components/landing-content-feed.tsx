import { LandingContentBlock } from './landing-content-block'

type LandingContentFeedProps = {
    title: string
    items: {
        id: number
        name: string
        image: string
    }[]
}

export const LandingContentFeed = (props: LandingContentFeedProps) => {
    return (
        <section className="flex flex-col gap-y-8">
            <h2 className="m-0">{props.title}</h2>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
                {props.items.map(item => (
                    <LandingContentBlock key={`content-block-${item.id}`} title={item.name} imgSrc={item.image} />
                ))}
            </div>
        </section>
    )
}
