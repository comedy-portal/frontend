export const ReviewUpdateSkeleton = () => {
    return (
        <div role="status" className="flex w-full animate-pulse flex-col gap-y-4 sm:w-104">
            <h1 className="my-[5px] h-4.5 w-[120px] rounded-lg bg-gray-100" />
            <hr className="border-gray-100" />
            <div className="flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-4">
                    <div className="flex items-center gap-x-4">
                        <div className="size-12 flex-shrink-0 rounded-lg bg-gray-100" />
                        <div className="flex w-full flex-col space-y-3.5">
                            <div className="h-4 w-20 rounded-lg bg-gray-100" />
                            <div className="flex items-center space-x-0.5 rounded">
                                {Array.from({ length: 10 }).map((_, index) => {
                                    return (
                                        <div
                                            key={`review-rating-skeleton-${index}`}
                                            className="h-3.5 flex-1 cursor-pointer bg-gray-100 transition-colors duration-200"
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <div className="my-[3px] h-3.5 w-40 rounded-lg bg-gray-100" />
                        <div className="h-[142px] rounded-lg bg-gray-100" />
                    </div>
                </div>

                <div className="flex gap-x-2">
                    <div className="h-10 w-[115px] rounded-lg bg-gray-100" />
                    <div className="h-10 w-[115px] rounded-lg bg-gray-100" />
                </div>
            </div>
        </div>
    )
}
