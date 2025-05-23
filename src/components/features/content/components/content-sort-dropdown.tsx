'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import { CustomDropdown, CustomDropdownItem } from '@/components/ui/dropdown'
import { ContentUrlSortBy } from '@/utils/enums/common'

export const ContentSortDropdown = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const contentSortOptions: CustomDropdownItem[] = [
        {
            label: 'Сначала новые',
            value: ContentUrlSortBy.DATE_DESC,
        },
        {
            label: 'Сначала старые',
            value: ContentUrlSortBy.DATE_ASC,
        },
        {
            label: 'По популярности',
            value: ContentUrlSortBy.RATING_DESC,
        },
    ]

    return (
        <CustomDropdown
            items={contentSortOptions}
            selectedValue={searchParams.get('sort') || ContentUrlSortBy.DATE_DESC}
            onSelect={item => {
                router.push(`?sort=${item.value}`)
            }}
        />
    )
}
