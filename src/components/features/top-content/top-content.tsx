import { GetTopContentTake } from '@/redux/services/content/content.types'
import { ContentType } from '@/utils/enums/common'

import { TopContentFeed } from './components/top-content-feed'

type TopContentProps = {
    children?: React.ReactNode
    type: ContentType
    year?: number
    take: GetTopContentTake
    isAuth: boolean
}

export const TopContent = ({ children, type, year, take, isAuth }: TopContentProps) => {
    return (
        <div className="-mt-8">
            {children}
            <TopContentFeed type={type} year={year} take={take} isAuth={isAuth} />
        </div>
    )
}
