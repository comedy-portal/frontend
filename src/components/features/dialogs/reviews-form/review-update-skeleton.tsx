import { RatingBarSkeleton } from '@/components/ui/rating-bar/rating-bar-skeleton'

export const ReviewUpdateSkeleton = () => {
    return (
        <div role="status" className="flex w-full animate-pulse flex-col gap-y-6 sm:w-104">
            <div className="my-[4px] h-6 w-[160px] rounded-lg bg-gray-100" />

            <div className="flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-4">
                    <RatingBarSkeleton />

                    <div className="flex flex-col gap-y-2">
                        <div className="my-[4px] h-4 w-40 rounded-lg bg-gray-100" />
                        <div className="h-[170px] rounded-lg bg-gray-100" />
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
