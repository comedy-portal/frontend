import { IContent } from '@/utils/types/content'

import { ContentAuthor } from './components/content-author'
import { ContentCover } from './components/content-cover'
import { ContentDescription } from './components/content-description'
import { ContentFacts } from './components/content-facts'
import { ContentRating } from './components/content-rating'
import { ContentReviews } from './components/content-reviews'

type ContentProps = IContent

export const Content = (props: ContentProps) => {
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-12 lg:col-span-2">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between gap-x-4">
                            <h1 className="mb-0! truncate">{props.name}</h1>
                            <ContentRating avgRating={props.rating.avgRating} />
                        </div>

                        <ContentAuthor
                            month={props.month}
                            year={props.year}
                            comedians={props.comedians}
                            group={props.group}
                        />
                    </div>

                    <ContentCover cover={props.contentImages[0]?.url} name={props.name} />
                    <ContentDescription description={props.metaInfo?.description} />
                </div>

                <ContentFacts facts={props.metaInfo?.facts} />
                <ContentReviews />
            </div>

            <div className="space-y-4 lg:col-span-1"></div>
        </div>
    )
}
