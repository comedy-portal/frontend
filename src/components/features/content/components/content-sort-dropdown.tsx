'use client'

import { CustomDropdown, CustomDropdownItem } from '@/components/ui/dropdown'
import { getContentSortBy, setContentSortBy } from '@/redux/features/content-slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { ContentSortBy } from '@/types/content'

export const ContentSortDropdown = () => {
    const dispatch = useAppDispatch()
    const contentSortBy = useAppSelector(getContentSortBy)

    const contentSortOptions: CustomDropdownItem[] = [
        {
            label: 'Сначала новые',
            value: ContentSortBy.DATE_DESC,
        },
        {
            label: 'Сначала старые',
            value: ContentSortBy.DATE_ASC,
        },
        {
            label: 'По популярности',
            value: ContentSortBy.RATING_DESC,
        },
    ]

    return (
        <CustomDropdown
            items={contentSortOptions}
            selectedValue={contentSortBy}
            onSelect={item => dispatch(setContentSortBy(item.value))}
        />
    )
}
