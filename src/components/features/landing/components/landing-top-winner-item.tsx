import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { Medal } from '@/components/ui/medal'

type LandingTopWinnerItemType = {
    place: number
    contentName: string
    contentDescription: string
    contentImage: string
    contentUrl: string
    authorName: string
    authorUrl: string
}

export const LandingTopWinnerItem = (props: LandingTopWinnerItemType) => {
    return (
        <div className="relative flex h-full flex-col gap-y-4 rounded-lg bg-white p-4">
            <div className="absolute top-6 left-6">
                <Medal place={props.place} />
            </div>
            <Link href="#" target="_blank">
                <ImageWithFallback
                    src={props.contentImage}
                    width={254}
                    height={160}
                    className="aspect-video h-auto w-full rounded-lg align-top"
                    alt="Василий Медведев - 30 серебрянников"
                />
            </Link>

            <div>
                <Link href={props.authorUrl} className="text-sm text-gray-500 hover:text-gray-950">
                    {props.authorName}
                </Link>

                <Link href={props.contentUrl} className="line-clamp-2 max-h-12 font-bold" target="_blank">
                    {props.contentName}
                </Link>

                <div className="line-clamp-3 h-15 text-sm">{props.contentDescription}</div>
            </div>
        </div>
    )
}
