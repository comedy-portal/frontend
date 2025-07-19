import { GetTopContentTake } from '@/redux/services/content/content.types'
import { ContentType } from '@/utils/enums/common'

import { TopContentFeed } from './components/top-content-feed'

type TopContentProps = {
    type: ContentType
    year?: number
    take: GetTopContentTake
}

export const TopContent = ({ type, year, take }: TopContentProps) => {
    return <TopContentFeed type={type} year={year} take={take} />
}
