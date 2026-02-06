import { ContentType } from '../enums/common'

export function parseWithText(value: string | null, defaultValue: boolean): boolean {
    if (value === null) return defaultValue
    return value === 'true'
}

export function parseRating(value: string | null, defaultValue: number): number {
    if (value === null) return defaultValue
    const num = Number(value)
    if (isNaN(num)) return defaultValue
    if (num < 0) return 0
    if (num > 10) return 10
    return num
}

export function parseCategories(param: string | null): ContentType[] {
    const VALID_CONTENT_TYPES = new Set<string>(Object.values(ContentType))

    if (!param) return []

    return param
        .split(',')
        .map(v => v.trim())
        .filter(v => VALID_CONTENT_TYPES.has(v)) as ContentType[]
}
