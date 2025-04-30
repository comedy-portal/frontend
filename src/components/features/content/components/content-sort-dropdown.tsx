'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import { CustomDropdown } from '@/components/ui/dropdown'
import { Order } from '@/types/common'
import { ContentSortBy } from '@/types/content'

const sortOptions = [
    {
        label: 'Сначала новые',
        value: 'date_desc',
        sort_by: ContentSortBy.DATE,
        order: Order.DESC,
    },
    {
        label: 'Сначала старые',
        value: 'date_asc',
        sort_by: ContentSortBy.DATE,
        order: Order.ASC,
    },
    {
        label: 'По популярности',
        value: 'rating_desc',
        sort_by: ContentSortBy.RATING,
        order: Order.DESC,
    },
]

export const ContentSortDropdown = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleSelect = (value: string) => {
        const selectedOption = sortOptions.find(option => option.value === value)

        if (!selectedOption) return

        const params = new URLSearchParams(searchParams.toString())
        params.set('sort_by', selectedOption.sort_by)
        params.set('order', selectedOption.order)

        router.push(`/content?${params.toString()}`)
    }

    return <CustomDropdown items={sortOptions.map(({ label, value }) => ({ label, value }))} onSelect={handleSelect} />
}
