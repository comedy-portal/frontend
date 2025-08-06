import { Platform } from '@/utils/enums/common'

import { IComedianBaseData, IGroupBaseData } from '../types/common'

export function getMonthNameRu(monthNumber: number): string {
    if (monthNumber < 1 || monthNumber > 12) return ''

    const date = new Date(2025, monthNumber - 1)
    const formatter = new Intl.DateTimeFormat('ru-RU', { month: 'long' })
    const monthName = formatter.format(date)

    return monthName.charAt(0).toUpperCase() + monthName.slice(1)
}

export function getAuthorDisplayNameForContent({
    comedians,
    group,
}: {
    comedians: IComedianBaseData[]
    group: IGroupBaseData | null
}): { name: string; url: string } | undefined {
    if (group) {
        return {
            name: group.name,
            url: `/comedians/groups/${group.slug}`,
        }
    }

    if (comedians.length === 1) {
        const comedian = comedians[0]
        return {
            name: `${comedian.name} ${comedian.surname}${comedian.isAgent ? '\u00A0*' : ''}`,
            url: `/comedians/${comedian.slug}`,
        }
    }

    if (comedians.length > 1) {
        const [first, ...rest] = comedians
        return {
            name: `${first.name} ${first.surname}${first.isAgent ? '\u00A0*' : ''}, +${rest.length}`,
            url: `/comedians/${first.slug}`,
        }
    }

    return undefined
}

export const getPlatformUrl = (platform: Platform, identifier: string) => {
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
        case Platform.SPOTIFY:
            return { href: `https://open.spotify.com/show/${identifier}`, label: 'Spotify' }
        case Platform.OTHER:
            return { href: identifier, label: 'Ссылка' }
        default:
            return null
    }
}
