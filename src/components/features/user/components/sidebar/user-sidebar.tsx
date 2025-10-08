'use client'

import { CircleUserIcon } from 'lucide-react'

import { Share } from '@/components/ui/share'
import { formatDuration } from '@/utils/helpers/registration-date-format'

const Item = ({ label, value }: { label: React.ReactNode; value: number }) => {
    return (
        <li className="text-center">
            <div className="whitespace-nowrap text-gray-500">{label}</div>
            <div className="text-2xl font-bold">{value}</div>
        </li>
    )
}

type UserSidebarProps = {
    username: string
    daysSinceRegistration: number
    _count: {
        reviews: number
        watchlists: number
        textReviewsCount: number
    }
}

export const UserSidebar = (props: UserSidebarProps) => {
    return (
        <div className="sticky top-[115px] space-y-6">
            <div className="relative space-y-6 rounded-2xl bg-gray-100 p-12">
                <div className="absolute -top-6 left-1/2 size-12 -translate-x-1/2 rounded-full bg-white" />

                <div className="flex flex-col items-center space-y-4">
                    <CircleUserIcon size={100} />
                    <div className="text-center">
                        <div className="text-2xl font-bold">{props.username}</div>
                        <div>На сайте {formatDuration(props.daysSinceRegistration)}</div>
                    </div>
                </div>

                <hr className="border-dashed border-gray-300" />

                <ul className="flex flex-col gap-y-4">
                    <Item label="Оценено выступлений" value={props._count?.reviews ?? 0} />
                    <Item label="Написано рецензий" value={props._count?.textReviewsCount ?? 0} />
                    <Item label="Добавлено в избранное" value={props._count?.watchlists ?? 0} />
                </ul>

                <div className="absolute -bottom-6 left-1/2 size-12 -translate-x-1/2 rounded-full bg-white" />
            </div>
            <Share title={props.username} url={`${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/users/${props.username}`} />
        </div>
    )
}
