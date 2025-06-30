import Link from 'next/link'

import { Rating } from '@/components/ui/rating'

type ContentReviewsFeedItemProps = {
    text: string
    rating: number
    username: string
    createdAt: string
}

export const ContentReviewsFeedItem = (props: ContentReviewsFeedItemProps) => {
    return (
        <div className="space-y-4 rounded-lg bg-gray-50 p-4 hover:bg-gray-100">
            <div className="flex items-center gap-x-4">
                <Rating value={props.rating} />
                <div className="text-sm">
                    <Link href={`/users/${props.username}`} className="font-semibold text-black hover:text-blue-500">
                        {props.username}
                    </Link>
                    <div className="text-gray-500">
                        {new Date(props.createdAt).toLocaleDateString('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </div>
                </div>
            </div>

            <div>{props.text}</div>
        </div>
    )
}
