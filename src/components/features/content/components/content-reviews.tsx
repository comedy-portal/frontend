import { Button } from 'react-bootstrap'

import { MessageCircleCodeIcon } from 'lucide-react'

import { ReviewBlock } from '@/components/ui/review-block'

export const ContentReviews = () => {
    return (
        <section>
            <div className="mb-4 flex items-center justify-between">
                <h2 className="mb-0! text-2xl!">Рецензии</h2>
                <Button size="sm" className="flex! items-center gap-x-2">
                    <MessageCircleCodeIcon size={16} /> Оставить рецензию
                </Button>
            </div>

            {/* <p className="text-gray-500">Рецензии пользователей пока отсутствуют.</p> */}
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
