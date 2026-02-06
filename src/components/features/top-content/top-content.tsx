import { GetTopContentTake } from '@/redux/services/content/content.types'
import { ContentType } from '@/utils/enums/common'

import { TopContentFeed } from './components/top-content-feed'
import { TopContentWatchedProgress } from './components/top-content-watched-progress'

type TopContentProps = {
    children?: React.ReactNode
    type: ContentType
    year?: number
    take: GetTopContentTake
    isAuth: boolean
}

export const TopContent = ({ children, type, year, take, isAuth }: TopContentProps) => {
    return (
        <div>
            {children}
            <div className="space-y-6">
                <TopContentWatchedProgress />
                <TopContentFeed type={type} year={year} take={take} isAuth={isAuth} />
            </div>
        </div>
    )
}
