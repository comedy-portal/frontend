import Link from 'next/link'

import { ContentBlock } from '@/components/ui/content-block/content-block'
import { getAuthorDisplayNameForContent } from '@/utils/helpers/common'
import { IContent } from '@/utils/types/content'

type LandingContentFeedProps = {
    title: string
    href: string
    items: IContent[]
}

export const LandingContentFeed = (props: LandingContentFeedProps) => {
    return (
        <section className="flex flex-col gap-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">{props.title}</h2>
                <Link href={props.href} className="mt-1 inline-flex items-center text-sm text-blue-500">
                    Посмотреть все
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
                {props.items.map(item => (
                    <ContentBlock
                        key={`landing-content-feed-item-${item.id}`}
                        id={item.id}
                        type={item.type}
                        name={item.name}
                        imageUrl={item.contentImages[0]?.url}
                        year={item.year}
                        avgRating={item.rating.avgRating}
                        author={getAuthorDisplayNameForContent(item)}
                    />
                ))}
            </div>
        </section>
    )
}
