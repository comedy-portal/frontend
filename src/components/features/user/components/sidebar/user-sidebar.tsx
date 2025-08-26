'use client'

import { BookmarkIcon, CalendarIcon, EditIcon, StarIcon } from 'lucide-react'

import { formatDuration } from '@/utils/helpers/registration-date-format'

import { UserSidebarShare } from './components/user-sidebar-share'

const Item = ({ label, value }: { label: React.ReactNode; value: number }) => {
    return (
        <li className="flex items-center justify-between gap-x-1">
            <div className="whitespace-nowrap">{label}</div>
            <div
                className="grow border-b border-dotted"
                style={{
                    borderBottomColor: 'rgba(0, 0, 0, 0.4)',
                    borderBottomWidth: '2px',
                    height: '5px',
                    marginTop: '4px',
                }}
            ></div>
            <div className="font-bold">{value}</div>
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
        <div className="sticky top-[115px] space-y-4">
            <div className="hidden space-y-4 rounded-xl bg-gray-50 p-4 lg:block lg:p-8">
                <div className="text-xl font-bold">{props.username}</div>
                <div className="flex items-center gap-x-2">
                    <CalendarIcon />
                    На сайте {formatDuration(props.daysSinceRegistration)}
                </div>
            </div>
            <div className="space-y-4 rounded-xl bg-gray-50 p-4 lg:p-8">
                <div className="text-xl font-bold">Статистика</div>
                <ul className="flex flex-col gap-y-4">
                    <Item
                        label={
                            <div className="flex items-center gap-x-2">
                                <StarIcon className="text-yellow-500" />
                                Оценок
                            </div>
                        }
                        value={props._count.reviews}
                    />
                    <Item
                        label={
                            <div className="flex items-center gap-x-2">
                                <EditIcon />
                                Рецензий
                            </div>
                        }
                        value={props._count.textReviewsCount}
                    />
                    <Item
                        label={
                            <div className="flex items-center gap-x-2">
                                <BookmarkIcon />В избранном
                            </div>
                        }
                        value={props._count.watchlists}
                    />
                </ul>
            </div>
            <UserSidebarShare
                title={props.username}
                url={`${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/users/${props.username}`}
            />
        </div>
    )
}
