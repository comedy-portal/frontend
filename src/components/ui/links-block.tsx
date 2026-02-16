'use client'

import { Platform } from '@/utils/enums/common'
import { getPlatformUrl } from '@/utils/helpers/common'
import { getUserCountry } from '@/utils/redux/features/user-slice'
import { useAppSelector } from '@/utils/redux/hooks'
import { ILink } from '@/utils/types/common'

import { ExternalLink } from './external-link'

type LinksBlockProps = {
    caption: string
    links: ILink[]
}

export const LinksBlock = ({ caption, links }: LinksBlockProps) => {
    const country = useAppSelector(getUserCountry)

    if (!country) {
        return null
    }

    const filteredLinks = links.filter(link => {
        if (country.toUpperCase() === 'RU' && link.platform === Platform.INSTAGRAM) {
            return false
        }
        return true
    })

    if (filteredLinks.length === 0) {
        return null
    }

    return (
        <section className="space-y-2">
            <h3 className="font-bold">{caption}</h3>

            {filteredLinks.map(link => {
                const platformData = getPlatformUrl(link)
                if (!platformData) return null

                return (
                    <div key={`link-block-${link.platform}-${link.identifier}`}>
                        <ExternalLink href={platformData.href} className="text-blue-500 hover:text-blue-700">
                            <span>{platformData.label}</span>
                        </ExternalLink>
                    </div>
                )
            })}
        </section>
    )
}
