import classNames from 'classnames'

type ContentBlockSkeletonType = {
    className?: string
}

export const ContentBlockSkeleton = ({ className }: ContentBlockSkeletonType) => {
    return <div className={classNames(className, 'rounded-lg bg-gray-300')} />
}
