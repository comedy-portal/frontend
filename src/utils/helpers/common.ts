import { Platform } from '@/utils/enums/common'
import { IComedianBaseData, IGroupBaseData, ILink } from '@/utils/types/common'

export function getMonthNameRu(monthNumber: number): string {
    if (monthNumber < 1 || monthNumber > 12) return ''

    const date = new Date(2025, monthNumber - 1)
    const formatter = new Intl.DateTimeFormat('ru-RU', { month: 'long' })
    const monthName = formatter.format(date)

    return monthName.charAt(0).toUpperCase() + monthName.slice(1)
}

export const formatDuration = (duration: number): string => {
    const hours = Math.floor(duration / 60)
    const minutes = duration % 60

    if (hours > 0) {
        return `${hours} ч${minutes > 0 ? ` ${minutes} мин.` : ''}`
    }

    return `${minutes} мин.`
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

export function getAuthorsDisplayNamesForContent({
    comedians,
    group,
}: {
    comedians: IComedianBaseData[]
    group: IGroupBaseData | null
}): { name: string; url: string }[] {
    const authors: { name: string; url: string }[] = []

    if (group) {
        authors.push({
            name: group.name,
            url: `/comedians/groups/${group.slug}`,
        })
    } else {
        comedians.forEach(comedian => {
            authors.push({
                name: `${comedian.name} ${comedian.surname}${comedian.isAgent ? '\u00A0*' : ''}`,
                url: `/comedians/${comedian.slug}`,
            })
        })
    }

    return authors
}

export const getPlatformUrl = ({ platform, identifier }: ILink) => {
    switch (platform) {
        case Platform.YOUTUBE:
            return { href: `https://www.youtube.com/${identifier}`, label: 'YouTube' }
        case Platform.TIKTOK:
            return { href: `https://www.tiktok.com/${identifier}`, label: 'TikTok' }
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

export const getTimeAgo = (date: Date) => {
    const now = new Date()
    const diff = Math.floor((now.getTime() - new Date(date).getTime()) / 1000) // сек
    const minutes = Math.floor(diff / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (days > 0) {
        if (days === 1) return '1 день назад'
        if (days < 5) return `${days} дня назад`
        return `${days} дней назад`
    }
    if (hours > 0) {
        if (hours === 1) return '1 час назад'
        if (hours < 5) return `${hours} часа назад`
        return `${hours} часов назад`
    }
    if (minutes > 0) {
        if (minutes === 1) return '1 минуту назад'
        if (minutes < 5) return `${minutes} минуты назад`
        return `${minutes} минут назад`
    }
    return 'только что'
}

export function formatDate(date: string | Date, locale: string = 'ru-RU'): string {
    const value = typeof date === 'string' ? new Date(date) : date

    if (Number.isNaN(value.getTime())) {
        return ''
    }

    return value.toLocaleDateString(locale, {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    })
}
