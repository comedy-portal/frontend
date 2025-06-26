import { ChevronRightIcon } from 'lucide-react'

import Link from 'next/link'

import { ContentBlock } from '@/components/ui/content-block'
import { IContent } from '@/utils/types/content'

type LandingContentFeedProps = {
    title: string
    href: string
    items: IContent[]
}

export const LandingContentFeed = (props: LandingContentFeedProps) => {
    return (
        <section className="flex flex-col gap-y-8">
            <h2 className="mb-0 text-3xl!">
                <Link href={props.href} className="inline-flex items-center gap-x-2 text-black no-underline!">
                    {props.title}
                    <ChevronRightIcon strokeWidth={2.5} className="mt-1.5" />
                </Link>
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
                {props.items.map(item => (
                    <ContentBlock
                        key={`landing-content-feed-item-${item.id}`}
                        id={item.id}
                        type={item.type}
                        name={item.name}
                        imageUrl={item.contentImages[0]?.url}
                        year={item.year}
                        avgRating={item.rating.avgRating}
                        reviewsCount={item.rating.reviewsCount}
                    />
                ))}
            </div>
        </section>
    )
}
