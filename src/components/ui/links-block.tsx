import Link from 'next/link'

import { Platform } from '@/utils/enums/common'
import { getPlatformUrl } from '@/utils/helpers/common'
import { ILink } from '@/utils/types/common'

type LinksBlockProps = {
    caption: string
    links: ILink[]
}

export const LinksBlock = ({ caption, links }: LinksBlockProps) => {
    return (
        <section className="space-y-2">
            <h3 className="font-bold">{caption}</h3>
            {links.map(link => {
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
                            <span>{`${platformData.label} ${link.platform === Platform.INSTAGRAM ? '**' : ''}`}</span>
                        </Link>
                    </div>
                )
            })}
        </section>
    )
}
