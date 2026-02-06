'use client'

import { useMemo } from 'react'

import { useSearchParams } from 'next/navigation'

import { contentTypesDict } from '@/utils/dict/content-types'

export const ContentManyNavigation = () => {
    const searchParams = useSearchParams()

    const filterQuery = useMemo(() => {
        const params = new URLSearchParams(searchParams.toString())
        return params.toString() ? `?${params.toString()}` : ''
    }, [searchParams])

    const nav = useMemo(
        () => [
            { label: 'Весь контент', href: `/content${filterQuery}` },
            ...contentTypesDict.map(({ slug, label }) => ({
                label,
                href: `/content/${slug.toLowerCase()}${filterQuery}`,
            })),
        ],
        [filterQuery],
    )

    return nav
}
