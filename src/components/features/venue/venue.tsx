'use client'

import { CircleArrowLeftIcon } from 'lucide-react'

import Link from 'next/link'

import { Share } from '@/components/features/common/share'
import { DescriptionBlock } from '@/components/ui/description-block'
import { GlobalLoading } from '@/components/ui/global-loading'
import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { LinksBlock } from '@/components/ui/links-block'
import { messages } from '@/messages'
import { venuesAPI } from '@/utils/redux/services/venues/venues.api'

type VenueProps = {
    slug: string
}

export const Venue = ({ slug }: VenueProps) => {
    const { data, isSuccess, error } = venuesAPI.useGetVenueBySlugQuery(slug)

    if (!isSuccess) {
        return <GlobalLoading />
    }

    if (error) {
        return <div>{messages.COMMON_ERROR_MESSAGE}</div>
    }

    return (
        <div className="wrapper space-y-12 pt-12 pb-24">
            <Link href="/venues" className="inline-flex items-center gap-x-2 hover:text-black">
                <CircleArrowLeftIcon size={24} className="text-inherit" />
                Все площадки
            </Link>

            <div className="flex flex-col-reverse gap-12 lg:flex-row">
                <div className="flex flex-1 flex-col gap-y-12">
                    <div className="flex h-125 items-center justify-center rounded-lg bg-gray-300">This is map</div>
                </div>

                <div className="flex shrink-0 flex-col gap-y-12 md:flex-row md:gap-x-6 lg:w-75 lg:flex-col xl:w-92">
                    <ImageWithFallback
                        src={`/images/venues/${data.slug}.jpg`}
                        alt={`${data.name}`}
                        width={100}
                        height={100}
                        className="aspect-square w-full rounded-lg md:size-75 lg:size-auto"
                    />

                    <div className="flex flex-col gap-y-6">
                        {data.metaInfo?.description && (
                            <section className="space-y-6">
                                <h1 className="text-4xl font-bold">{data.name}</h1>
                                <DescriptionBlock text={data.metaInfo.description} limit={200} />
                            </section>
                        )}

                        {data.city && (
                            <section className="space-y-2">
                                <h3 className="font-bold">Город</h3>
                                <p>{data.city}</p>
                            </section>
                        )}

                        <LinksBlock caption="Ссылки" links={data.metaInfo?.links || []} />

                        <Share
                            title={data.name}
                            text={data.metaInfo?.description}
                            url={`${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/venues/${data.slug}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
