import { IContent } from '../types/content'

export function getMonthNameRu(monthNumber: number): string {
    if (monthNumber < 1 || monthNumber > 12) return ''

    const date = new Date(2025, monthNumber - 1)
    const formatter = new Intl.DateTimeFormat('ru-RU', { month: 'long' })
    const monthName = formatter.format(date)

    return monthName.charAt(0).toUpperCase() + monthName.slice(1)
}

export function getAuthorDisplayNameForContent(content: IContent): { name: string; url: string } | undefined {
    if (content.group) {
        return {
            name: content.group.name,
            url: `/comedians/groups/${content.group.slug}`,
        }
    }

    if (content.comedians.length === 1) {
        const comedian = content.comedians[0]
        return {
            name: `${comedian.name} ${comedian.surname}`,
            url: `/comedians/${comedian.slug}`,
        }
    }

    if (content.comedians.length > 1) {
        const [first, ...rest] = content.comedians
        return {
            name: `${first.name} ${first.surname} +${rest.length}`,
            url: `/comedians/${first.slug}`,
        }
    }

    return undefined
}
