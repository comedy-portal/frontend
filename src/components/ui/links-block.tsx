'use client'

import { Platform } from '@/utils/enums/common'
import { getPlatformUrl } from '@/utils/helpers/common'
import { internalApi } from '@/utils/redux/services/internal/internal.api'
import { ILink } from '@/utils/types/common'
import Image from 'next/image'

import { ExternalLink } from './external-link'

type LinksBlockProps = {
    caption: string
    links: ILink[]
}

const platformIcons: Partial<Record<Platform, string>> = {
    // https://allsvgicons.com
    [Platform.BOOSTY]: '/icons/brand/boosty.svg',
    [Platform.INSTAGRAM]: '/icons/brand/instagram.svg',
    [Platform.OTHER]: '/icons/brand/other.svg',
    [Platform.PATREON]: '/icons/brand/patreon.svg',
    [Platform.SPECIALS_COMEDY]: '/icons/brand/other.svg',
    [Platform.SPOTIFY]: '/icons/brand/spotify.svg',
    [Platform.TELEGRAM]: '/icons/brand/telegram.svg',
    [Platform.THREADS]: '/icons/brand/threads.svg',
    [Platform.TIKTOK]: '/icons/brand/tiktok.svg',
    [Platform.VK]: '/icons/brand/vk.svg',
    [Platform.YOUTUBE]: '/icons/brand/youtube.svg',
}

export const LinksBlock = ({ caption, links }: LinksBlockProps) => {
    const { data, isLoading } = internalApi.useGetEdgeGeoQuery()

    if (isLoading) {
        return null
    }


    const filteredLinks = links.filter(link => {
        if (data?.countryCode?.toUpperCase() === 'RU' && link.platform === Platform.INSTAGRAM) {
            return false
        }
        return true
    })

    if (filteredLinks.length == 0) {
        return null
    }

    return (
        <section className="space-y-4">
            <h3 className="font-bold">{caption}</h3>
            <div className="space-y-2">
                {filteredLinks.map(link => {
                    const platformData = getPlatformUrl(link)

                    if (!platformData) return null

                    return (
                        <div key={`link-block-${link.platform}-${link.identifier}`}>
                            <ExternalLink href={platformData.href} className="gap-x-2 text-blue-500 hover:text-blue-700">
                                <Image
                                    src={platformIcons[link.platform]!}
                                    alt=""
                                    aria-hidden="true"
                                    width={24}
                                    height={24}
                                    className="shrink-0"
                                />
                                <span>{platformData.label}</span>
                            </ExternalLink>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
