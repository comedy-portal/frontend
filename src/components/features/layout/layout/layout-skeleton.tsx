import classNames from 'classnames'

import { LayoutNavSkeleton } from './components/layout-nav-skeleton'

type LayoutSkeletonProps = {
    children: React.ReactNode
    size?: 'sm' | 'lg'
}

export const LayoutSkeleton = ({ children, size }: LayoutSkeletonProps) => {
    const wrapperSize = `wrapper-${size}`

    return (
        <div role="status" className={classNames(wrapperSize, 'animate-pulse py-8 sm:py-16')}>
            <div className="flex flex-col gap-y-8 sm:gap-y-8">
                <div className="flex items-center gap-x-4">
                    <div className="h-9 w-64 rounded-lg bg-gray-100 sm:h-10" />
                </div>
                <LayoutNavSkeleton />
                {children}
            </div>
        </div>
    )
}
