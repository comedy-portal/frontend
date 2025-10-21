import classNames from 'classnames'

import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { categories } from '@/utils/dict/categories'
import { ContentType } from '@/utils/enums/common'

import { ContentBlockBookmark } from './components/content-block-bookmark'
import { ContentBlockDate } from './components/content-block-date'
import { ContentBlockDuration } from './components/content-block-duration'
import { ContentBlockRating } from './components/content-block-rating'
import { ContentBlockTag } from './components/content-block-tag'

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
        <div className="relative lg:flex lg:h-[180px]">
            <ContentBlockRating avgRating={props.avgRating} myRating={props.myRating} />

            <Link href={props.contentUrl} className="shrink-0" target="_blank">
                <ImageWithFallback
                    src={props.imageUrl || ''}
                    width={288}
                    height={180}
                    className={classNames(
                        'aspect-video align-top', // common styles
                        'lg:h-[180px] lg:w-[288px] lg:rounded-none lg:rounded-l-lg', // for larger screens
                        'h-auto w-full rounded-t-lg', // for smaller screens
                    )}
                    alt={props.name}
                />
            </Link>

            <div
                className={classNames(
                    'flex flex-col border-gray-300', // common styles
                    'lg:flex-grow lg:justify-between lg:gap-y-0 lg:rounded-tl-none lg:rounded-tr-lg lg:rounded-br-lg lg:rounded-bl-none lg:border-t lg:border-r lg:border-b lg:border-l-0 lg:p-6', // for larger screens
                    'gap-y-4 rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg border-t-0 border-r border-b border-l p-4', // for smaller screens
                )}
            >
                <div>
                    {props.author && (
                        <Link href={props.author.url} className="text-sm text-gray-500 hover:text-gray-950">
                            {props.author.name}
                        </Link>
                    )}

                    <Link
                        href={props.contentUrl}
                        className={classNames(
                            'mb-1 line-clamp-1 max-h-7 font-bold', // common styles
                            'lg:pr-12 lg:text-lg', // for larger screens
                            'text-base', // for smaller screens
                        )}
                        target="_blank"
                    >
                        {`${props.position ? props.position + '. ' : ''} ${props.name}`}
                    </Link>

                    {props.description && (
                        <div
                            className={classNames('text-sm', {
                                'line-clamp-3 h-15': !props.type || !props.author,
                                'line-clamp-2 h-10': props.type && props.author,
                            })}
                        >
                            {props.description}
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-between gap-x-4">
                    <div className="flex items-center gap-x-2">
                        <div className="flex items-center gap-x-1">
                            <ContentBlockTag
                                link={`/content/${props.type.toLowerCase()}`}
                                title={
                                    categories.find(category => category.type === props.type?.toLowerCase())?.label ||
                                    ''
                                }
                            />
                            <ContentBlockDate year={props.year} />
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
