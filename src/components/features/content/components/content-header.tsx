import Image from 'next/image'

import { ContentAuthor } from './content-author'
import { ContentDate } from './content-date'
import { ContentPlayButton } from './content-play-button'

type ContentHeaderProps = {
    name: string
    cover: string
    month: number | null
    year: number
    duration: number | null
    description: string | null
}

export const ContentHeader = ({ name, cover, month, year, duration, description }: ContentHeaderProps) => {
    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex items-center justify-between gap-x-4">
                <div className="overflow-hidden">
                    <h1 className="truncate">{name}</h1>
                    <div className="flex gap-x-2">
                        <ContentAuthor id={1} name="Имя" surname="Фамилия" slug="имя-фамилия" isAgent={false} />
                        <span className="text-gray-500">•</span>
                        <ContentDate month={month} year={year} />
                    </div>
                </div>

                <ContentPlayButton duration={duration} />
            </div>

            <Image
                src={cover}
                width={500}
                height={500}
                className="aspect-video w-full rounded-2xl object-cover"
                alt={name}
            />

            <div>{description}</div>
        </div>
    )
}
