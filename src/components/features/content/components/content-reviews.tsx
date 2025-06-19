import { Button } from 'react-bootstrap'

import { ReviewBlock } from '@/components/ui/review-block'

export const ContentReviews = () => {
    return (
        <section>
            <div className="mb-4 flex items-center justify-between">
                <h2 className="mb-0! text-2xl!">Отзывы пользователей</h2>
                <Button size="sm">Оставить отзыв</Button>
            </div>

            {/* <p className="text-gray-500">Отзывы пользователей пока отсутствуют.</p> */}
            <div className="space-y-8">
                <ReviewBlock />
                <ReviewBlock />
                <ReviewBlock />
                <ReviewBlock />
                <ReviewBlock />
                <ReviewBlock />
                <ReviewBlock />
                <ReviewBlock />
                <ReviewBlock />
                <ReviewBlock />
            </div>
        </section>
    )
}
