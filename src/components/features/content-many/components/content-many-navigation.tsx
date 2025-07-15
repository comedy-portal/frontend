'use client'

import { useMemo } from 'react'

import { useSearchParams } from 'next/navigation'

import { categories } from '@/utils/dict/categories'

export const ContentManyNavigation = () => {
    const searchParams = useSearchParams()

    const filterQuery = useMemo(() => {
        const params = new URLSearchParams(searchParams.toString())
        return params.toString() ? `?${params.toString()}` : ''
    }, [searchParams])

    const nav = useMemo(
        () => [
            { label: 'Весь контент', href: `/content${filterQuery}` },
            ...categories.map(({ type, label }) => ({
                label,
                href: `/content/${type.toLowerCase()}${filterQuery}`,
            })),
        ],
        [filterQuery],
    )

    return nav
}
