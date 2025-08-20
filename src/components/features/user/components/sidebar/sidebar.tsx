'use client'

import { Share } from '@/components/ui/share'
import { formatDuration } from '@/utils/helpers/registration-date-format'

const Item = ({ label, value }: { label: string; value: number }) => {
    return (
        <li className="flex items-center justify-between gap-x-1">
            <div className="text-sm whitespace-nowrap">{label}</div>
            <div
                className="grow border-b border-dotted"
                style={{
                    borderBottomColor: 'rgba(0, 0, 0, 0.4)',
                    borderBottomWidth: '2px',
                    height: '5px',
                    marginTop: '4px',
                }}
            ></div>
            <div className="text-sm font-medium">{value}</div>
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
        <div className="sticky top-[115px] space-y-6 rounded-xl bg-gray-50 p-6 lg:p-8">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="hidden text-xl font-bold lg:block">{props.username}</h2>
                    <div className="text-sm">{formatDuration(props.daysSinceRegistration)} на сайте</div>
                </div>
                <Share
                    title={props.username}
                    url={`${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/users/${props.username}`}
                />
            </div>
            <hr className="border-t border-gray-200" />
            <div className="space-y-2">
                <div>Статистика:</div>
                <ul className="flex flex-col gap-y-2">
                    <Item label="Оценок" value={props._count.reviews} />
                    <Item label="Рецензий" value={props._count.textReviewsCount} />
                    <Item label="В избранном" value={props._count.watchlists} />
                </ul>
            </div>
        </div>
    )
}
