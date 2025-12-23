import classNames from 'classnames'

import { Rating } from '@/components/ui/rating'

export type ContentBlockRatingProps = {
    avgRating: number
    myRating?: number
}

export const ContentBlockRating = ({ avgRating, myRating }: ContentBlockRatingProps) => {
    return (
        <div className="flex items-start">
            {myRating && (
                <div className="rounded-bl-lg bg-white pb-1 pl-1" title="Моя оценка">
                    <Rating value={myRating} isHighlight className="size-8! text-sm" />
                </div>
            )}

            <div className="rounded-bl-lg bg-white pb-1 pl-1" title="Средний рейтинг">
                <Rating value={avgRating} className="size-12" />
            </div>
        </div>
    )
}
