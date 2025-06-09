import { Button } from 'react-bootstrap'

export const ContentReviews = () => {
    return (
        <section className="flex flex-col gap-y-4">
            <div className="flex items-center justify-between">
                <h2 className="mb-0!">Отзывы пользователей</h2>
                <Button>Оставить отзыв</Button>
            </div>

            <p className="text-gray-500">Отзывы пользователей пока отсутствуют.</p>
        </section>
    )
}
