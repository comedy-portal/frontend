export const RatingBarSkeleton = () => {
    return (
        <div className="flex items-center gap-x-4">
            <div className="flex w-full flex-col gap-y-2">
                <div className="my-[4px] h-4 w-20 rounded-lg bg-gray-100" />

                <div className="flex items-center overflow-hidden rounded-2xl">
                    {Array.from({ length: 10 }).map((_, index) => {
                        return (
                            <div
                                key={`review-rating-skeleton-${index}`}
                                className="ml-0.5 h-4 flex-1 bg-gray-100 first:ml-0"
                            />
                        )
                    })}
                </div>
            </div>

            <div className="size-12 flex-shrink-0 rounded-lg bg-gray-100" />
        </div>
    )
}
