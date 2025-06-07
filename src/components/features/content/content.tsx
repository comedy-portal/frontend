import { IContent } from '@/utils/types/content'

import { ContentFacts } from './components/content-facts'
import { ContentHeader } from './components/content-header'
import { ContentReviews } from './components/content-reviews'

type ContentProps = IContent

export const Content = (props: ContentProps) => {
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-12 lg:col-span-2">
                <ContentHeader
                    name={props.name}
                    cover={props.contentImages[0]?.url}
                    month={props.month}
                    year={props.year}
                    duration={props.duration}
                    description={props.metaInfo?.description ?? null}
                />

                <ContentFacts facts={props.metaInfo?.facts ?? null} />
                <ContentReviews />
            </div>

            <div className="space-y-4 lg:col-span-1"></div>
        </div>
    )
}
