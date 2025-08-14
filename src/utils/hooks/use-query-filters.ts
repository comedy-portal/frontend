'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type ParseFn<T> = (params: URLSearchParams) => T
type BuildFn<T> = (filters: T) => string

export function useQueryFilters<T>(
    parseFn: ParseFn<T>,
    buildFn: BuildFn<T>,
): [T, (filters: T, replace?: boolean) => void] {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const currentFilters = parseFn(searchParams)

    const setFiltersToUrl = (filters: T, replace = false) => {
        const query = buildFn(filters)
        const url = query ? `${pathname}?${query}` : pathname
        replace ? router.replace(url) : router.push(url)
    }

    return [currentFilters, setFiltersToUrl]
}
