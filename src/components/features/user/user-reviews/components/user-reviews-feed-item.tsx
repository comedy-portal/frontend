import Link from 'next/link'

import { Rating } from '@/components/ui/rating'
import { ContentType } from '@/utils/enums/common'

type UserReviewsFeedItemProps = {
    id: number
    type: ContentType
    name: string
    text: string
    rating: number
    createdAt: string
}

export const UserReviewsFeedItem = (props: UserReviewsFeedItemProps) => {
    return (
        <div className="space-y-4 rounded bg-gray-100 p-4">
            <div className="flex items-center gap-x-4">
                <Rating value={props.rating} />
                <div className="text-sm">
                    <Link
                        href={`/content/${props.type.toLowerCase()}/${props.id}`}
                        className="font-semibold text-black! no-underline! hover:text-blue-500!"
                    >
                        {props.name}
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
