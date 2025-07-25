import classNames from 'classnames'

import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { categories } from '@/utils/dict/categories'
import { ContentType } from '@/utils/enums/common'

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
    duration?: number | null
    avgRating: number
    myRating?: number
    imageUrl: string | null
    author?: {
        name: string
        url: string
    }
}

export const ContentBlock = (props: ContentBlockType) => {
    return (
        <div className="relative">
            <Link href={`/content/${props.type.toLowerCase()}/${props.id}`} target="_blank">
                <ContentBlockRating avgRating={props.avgRating} myRating={props.myRating} />

                <ImageWithFallback
                    src={props.imageUrl || ''}
                    width={254}
                    height={160}
                    className="aspect-video h-auto w-auto rounded-t-lg align-top"
                    alt={props.name}
                />
            </Link>

            <div className="flex flex-col gap-y-4 rounded-b-lg border-x border-b border-[#DFE2E6] p-4">
                <div>
                    {props.author && <div className="text-sm text-gray-500">{props.author.name}</div>}

                    <Link
                        href={`/content/${props.type.toLowerCase()}/${props.id}`}
                        className="line-clamp-2 h-12 font-bold"
                        target="_blank"
                    >
                        {props.name}
                    </Link>

                    {props.description && <div className="line-clamp-2 h-10 text-sm">{props.description}</div>}
                </div>

                <div className="flex items-center justify-between gap-x-4">
                    <ContentBlockTag
                        link={`/content/${props.type.toLowerCase()}`}
                        title={categories.find(category => category.type === props.type.toLowerCase())?.label || ''}
                    />

                    <div className="flex items-center gap-x-2">
                        {props.duration && <ContentBlockDuration duration={props.duration} />}
                        <ContentBlockDate year={props.year} />
                    </div>
                </div>
            </div>
        </div>
    )
}
