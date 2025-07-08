import Link from 'next/link'

import { Platform } from '@/utils/enums/common'
import { Link as LinkType } from '@/utils/types/common'

type ContentWatchProps = {
    links: LinkType[]
}

export const ContentWatch = ({ links }: ContentWatchProps) => {
    const getPlatformUrl = (platform: Platform, identifier: string) => {
        switch (platform) {
            case Platform.YOUTUBE:
                return { href: `https://www.youtube.com/${identifier}`, label: 'YouTube' }
            case Platform.TIKTOK:
                return { href: `https://www.tiktok.com/@${identifier}`, label: 'TikTok' }
            case Platform.INSTAGRAM:
                return { href: `https://www.instagram.com/${identifier}`, label: 'Instagram' }
            case Platform.TELEGRAM:
                return { href: `https://t.me/${identifier}`, label: 'Telegram' }
            case Platform.PATREON:
                return { href: `https://www.patreon.com/${identifier}`, label: 'Patreon' }
            case Platform.VK:
                return { href: `https://vk.com/${identifier}`, label: 'VK' }
            case Platform.BOOSTY:
                return { href: `https://boosty.to/${identifier}`, label: 'Boosty' }
            case Platform.SPECIALS_COMEDY:
                return { href: `https://specialscomedy.com/concert/${identifier}`, label: 'Specials Comedy' }
            case Platform.OTHER:
                return { href: identifier, label: 'Ссылка' }
            default:
                return null
        }
    }

    return (
        <section className="space-y-2">
            <h3 className="font-bold">Смотреть</h3>
            {links.map(source => {
                const platformData = getPlatformUrl(source.platform, source.identifier)
                if (!platformData) return null

                return (
                    <div key={`content-author-${source.identifier}`}>
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
