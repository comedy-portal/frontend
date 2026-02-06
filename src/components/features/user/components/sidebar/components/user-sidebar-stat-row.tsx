import { ReactNode } from 'react'

import classNames from 'classnames'

type UserSidebarStatRowProps = {
    label: ReactNode
    value: number
    variant?: 'main' | 'sub'
}

export const UserSidebarStatRow = ({ label, value, variant = 'main' }: UserSidebarStatRowProps) => {
    const isMain = variant === 'main'

    return (
        <li
            className={classNames('flex items-center justify-between gap-x-1', {
                'text-sm text-gray-500': !isMain,
            })}
        >
            <div className="whitespace-nowrap">{label}</div>

            <div
                className="grow border-b border-dotted"
                style={{
                    borderBottomColor: isMain ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.25)',
                    borderBottomWidth: isMain ? '2px' : '1px',
                    height: isMain ? '5px' : '4px',
                    marginTop: '4px',
                }}
            />

            <div className={classNames('font-bold', { 'text-xl': isMain })}>{value}</div>
        </li>
    )
}
