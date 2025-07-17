'use client'

import Link from 'next/link'

import { internalApi } from '@/redux/services/internal/internal.api'
import { Platform } from '@/utils/enums/common'
import { getPlatformUrl } from '@/utils/helpers/common'
import { ILink } from '@/utils/types/common'

type LinksBlockProps = {
    caption: string
    links: ILink[]
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

    return (
        <section className="space-y-2">
            <h3 className="font-bold">{caption}</h3>
            {filteredLinks.map(link => {
                const platformData = getPlatformUrl(link.platform, link.identifier)

                if (!platformData) return null

                return (
                    <div key={`link-block-${link.platform}-${link.identifier}`}>
                        <Link
                            href={platformData.href}
                            className="text-gray-500 hover:text-gray-950"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>{platformData.label}</span>
                        </Link>
                    </div>
                )
            })}
        </section>
    )
}
