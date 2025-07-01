'use client'

import classNames from 'classnames'

const LINK_QTY = 3

export const LayoutNavSkeleton = () => {
    return (
        <nav className="relative flex gap-x-6 border-b border-gray-200 pb-3">
            {Array.from({ length: LINK_QTY }).map((_, index) => (
                <div
                    key={`layout-nav-skeleton-item-${index}`}
                    className={classNames('relative text-nowrap', {
                        'h-6 w-32 rounded-lg bg-gray-100': true,
                    })}
                />
            ))}
        </nav>
    )
}
