import { StarIcon } from 'lucide-react'

import Link from 'next/link'

type ReviewBlockProps = {
    text: string
    rating: number
    username: string
    createdAt: string
}

export const ReviewBlock = (props: ReviewBlockProps) => {
    return (
        <div className="space-y-4 rounded border-l-4 border-green-100 bg-green-50 p-4">
            <div className="flex items-start justify-between">
                <div className="text-sm">
                    <Link
                        href={`/users/${props.username}`}
                        className="font-semibold text-black! no-underline! hover:text-blue-500!"
                    >
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
                <div className="flex items-center gap-x-2 text-sm">
                    <StarIcon size={16} fill="rgb(245, 197, 24)" stroke="rgb(245, 197, 24)" />
                    <strong>{props.rating} / 10</strong>
                </div>
            </div>

            <div>{props.text}</div>
        </div>
    )
}
