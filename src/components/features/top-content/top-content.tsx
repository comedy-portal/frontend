import { GetTopContentTake } from '@/redux/services/content/content.types'
import { ContentType } from '@/utils/enums/common'

import { TopContentFeed } from './components/top-content-feed'

type TopContentProps = {
    type: ContentType
    year?: number
    take: GetTopContentTake
    isAuth: boolean
}

export const TopContent = ({ type, year, take, isAuth }: TopContentProps) => {
    return <TopContentFeed type={type} year={year} take={take} isAuth={isAuth} />
}
