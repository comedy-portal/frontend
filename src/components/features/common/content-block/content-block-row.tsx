import classNames from 'classnames'

import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { Rating } from '@/components/ui/rating'
import { ContentType } from '@/utils/enums/common'

import { ContentBlockBookmark } from './components/content-block-bookmark'
import { ContentBlockDate } from './components/content-block-date'
import { ContentBlockDuration } from './components/content-block-duration'
import { ContentBlockType } from './components/content-block-tag'

type ContentBlockRowType = {
    id: number
    name: string
    description?: string | null
    type: ContentType
    year: number
    duration: number | null
    avgRating: number
    myRating?: number
    myReviewId?: number
    contentUrl: string
    imageUrl?: string
    position?: number
    author?: {
        name: string
        url: string
    }
    isInWatchlist: boolean
    isAuth: boolean
}

export const ContentBlockRow = (props: ContentBlockRowType) => {
    return (
        <div className="relative flex flex-col gap-4 rounded-lg bg-white p-4 lg:flex-row">
            <div className="absolute top-4 right-4 flex items-start lg:hidden">
                {props.myRating && (
                    <div className="rounded-bl-lg bg-white pb-1 pl-1" title="Моя оценка">
                        <Rating value={props.myRating} isHighlight className="size-8! text-sm" />
                    </div>
                )}

                <div className="rounded-bl-lg bg-white pb-1 pl-1" title="Средний рейтинг">
                    <Rating value={props.avgRating} className="size-12" />
                </div>
            </div>

            <Link href={props.contentUrl} className="shrink-0" target="_blank">
                <ImageWithFallback
                    src={props.imageUrl || ''}
                    width={288}
                    height={180}
                    className={classNames(
                        'aspect-video rounded-lg align-top', // common styles
                        'lg:h-45 lg:w-[288px]', // for larger screens
                        'h-auto w-full', // for smaller screens
                    )}
                    alt={props.name}
                />
            </Link>

            <div
                className={classNames(
                    'flex flex-col', // common styles
                    'lg:grow lg:justify-between lg:gap-y-0 lg:rounded-tl-none lg:rounded-tr-lg lg:rounded-br-lg lg:rounded-bl-none', // for larger screens
                    'gap-y-4 rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg', // for smaller screens
                )}
            >
                <div className="flex flex-col gap-y-2">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            {props.author && (
                                <Link href={props.author.url} className="text-sm text-gray-500 hover:text-gray-950">
                                    {props.author.name}
                                </Link>
                            )}

                            <Link
                                href={props.contentUrl}
                                className={classNames(
                                    'line-clamp-1 font-bold', // common styles
                                    'lg:text-lg', // for larger screens
                                    'text-base', // for smaller screens
                                )}
                                target="_blank"
                                title={props.name}
                            >
                                {`${props.position ? props.position + '. ' : ''} ${props.name}`}
                            </Link>
                        </div>

                        <div className="hidden lg:flex lg:items-start lg:gap-x-1">
                            {props.myRating && (
                                <div title="Моя оценка">
                                    <Rating value={props.myRating} isHighlight className="size-8! text-sm" />
                                </div>
                            )}

                            <div title="Средний рейтинг">
                                <Rating value={props.avgRating} className="size-12" />
                            </div>
                        </div>
                    </div>

                    {props.description && <div className="line-clamp-4 h-20 text-sm">{props.description}</div>}
                </div>

                <div className="flex items-center justify-between gap-x-4">
                    <div className="flex items-center gap-x-2">
                        <div className="flex items-center gap-x-1">
                            <ContentBlockType slug={props.type} />
                            <ContentBlockDate slug={props.type} year={props.year} />
                        </div>
                        {props.duration && <ContentBlockDuration duration={props.duration} />}
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
