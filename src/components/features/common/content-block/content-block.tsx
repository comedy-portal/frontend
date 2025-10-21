import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { categories } from '@/utils/dict/categories'
import { ContentType } from '@/utils/enums/common'

import { ContentBlockBookmark } from './components/content-block-bookmark'
import { ContentBlockDate } from './components/content-block-date'
import { ContentBlockDuration } from './components/content-block-duration'
import { ContentBlockRating } from './components/content-block-rating'
import { ContentBlockTag } from './components/content-block-tag'

type ContentBlockType = {
    id: number
    name: string
    description?: string | null
    type: ContentType
    year: number
    duration: number | null
    avgRating: number
    myRating?: number
    myReviewId?: number
    imageUrl?: string
    author?: {
        name: string
        url: string
    }
    isInWatchlist: boolean
    isAuth: boolean
}

export const ContentBlock = (props: ContentBlockType) => {
    return (
        <div className="relative flex h-full flex-col">
            <Link href={`/content/${props.type.toLowerCase()}/${props.id}`} target="_blank">
                <ContentBlockRating avgRating={props.avgRating} myRating={props.myRating} />

                <ImageWithFallback
                    src={props.imageUrl || ''}
                    width={254}
                    height={160}
                    className="aspect-video h-auto w-full rounded-t-lg align-top"
                    alt={props.name}
                />
            </Link>

            <div className="flex flex-1 flex-col gap-y-4 rounded-b-lg border-x border-b border-[#DFE2E6] p-4">
                <div>
                    {props.author && (
                        <Link href={props.author.url} className="text-sm text-gray-500 hover:text-gray-950">
                            {props.author.name}
                        </Link>
                    )}

                    <Link
                        href={`/content/${props.type.toLowerCase()}/${props.id}`}
                        className="line-clamp-2 max-h-12 font-bold"
                        target="_blank"
                    >
                        {props.name}
                    </Link>

                    {props.description && <div className="line-clamp-2 h-10 text-sm">{props.description}</div>}
                </div>

                <div className="mt-auto flex items-center justify-between gap-x-4">
                    <div className="flex items-center gap-x-2">
                        <div className="flex items-center gap-x-1">
                            <ContentBlockTag
                                link={`/content/${props.type.toLowerCase()}`}
                                title={
                                    categories.find(category => category.type === props.type.toLowerCase())?.label || ''
                                }
                            />
                            <ContentBlockDate year={props.year} />
                        </div>

                        <div className="flex items-center gap-x-2">
                            {props.duration && <ContentBlockDuration duration={props.duration} />}
                        </div>
                    </div>

                    <ContentBlockBookmark
                        name={props.name}
                        contentId={props.id}
                        isAuth={props.isAuth}
                        isInWatchlist={props.isInWatchlist}
                    />
                </div>
            </div>
        </div>
    )
}
