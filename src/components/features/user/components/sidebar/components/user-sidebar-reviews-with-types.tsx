'use client'

import { useState } from 'react'

import { ChevronDownIcon } from 'lucide-react'

import { UserSidebarStatRow } from './user-sidebar-stat-row'

type UserSidebarReviewsWithTypesProps = {
    total: number
}

export const UserSidebarReviewsWithTypes = ({ total }: UserSidebarReviewsWithTypesProps) => {
    const [open, setOpen] = useState(false)

    const types = [
        { label: 'Спешл', value: 8 },
        { label: 'Стендап', value: 5 },
        { label: 'Блоги', value: 3 },
        { label: 'Дискуссия', value: 2 },
        { label: 'Импровизация', value: 2 },
        { label: 'Подкаст', value: 2 },
        { label: 'Прожарка', value: 2 },
        { label: 'Сериалы', value: 2 },
        { label: 'Скетчи', value: 2 },
        { label: 'Ток-шоу', value: 2 },
        { label: 'Командные', value: 2 },
    ]

    return (
        <li className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between gap-x-1 text-left">
                <div
                    className="flex cursor-pointer items-center gap-2 whitespace-nowrap"
                    onClick={() => setOpen(v => !v)}
                >
                    Оценено выступлений
                    <ChevronDownIcon size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                </div>

                <div
                    className="grow border-b border-dotted"
                    style={{
                        borderBottomColor: 'rgba(0,0,0,0.4)',
                        borderBottomWidth: '2px',
                        height: '5px',
                        marginTop: '4px',
                    }}
                />

                <div className="text-xl font-bold">{total}</div>
            </div>

            {open && (
                <ul className="ml-4 flex flex-col gap-y-1">
                    {types.map(type => (
                        <UserSidebarStatRow key={type.label} label={type.label} value={type.value} variant="sub" />
                    ))}
                </ul>
            )}
        </li>
    )
}
