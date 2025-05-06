import { ContentBlock } from '@/components/ui/content-block'
import { IContent } from '@/types/content'

type LandingContentFeedProps = {
    title: string
    items: IContent[]
}

export const LandingContentFeed = (props: LandingContentFeedProps) => {
    return (
        <section className="flex flex-col gap-y-8">
            <h2 className="m-0">{props.title}</h2>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
                {props.items.map(item => (
                    <ContentBlock key={`content-block-${item.id}`} content={item} />
                ))}
            </div>
        </section>
    )
}
