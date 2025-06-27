import { IContent } from '@/utils/types/content'

import { ContentDescriptionCover } from './components/content-description-cover'

type ContentDescriptionProps = {
    content: IContent
}

export const ContentDescription = ({ content }: ContentDescriptionProps) => {
    return (
        <div className="space-y-4">
            <ContentDescriptionCover cover={content.contentImages[0].url} name={content.name} />
            <div>{content.metaInfo?.description}</div>
        </div>
    )
}
