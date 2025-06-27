'use client'

import ScrollContainer from 'react-indiana-drag-scroll'

import classNames from 'classnames'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { categories } from '@/utils/dict/categories'
import { ContentType, ContentUrlSortBy } from '@/utils/enums/common'

import 'react-indiana-drag-scroll/dist/style.css'

type ContentManyCategoriesProps = {
    slug: ContentType
}

export const ContentManyCategories = ({ slug }: ContentManyCategoriesProps) => {
    const searchParams = useSearchParams()
    const currentType = slug.toLowerCase()

    return (
        <ScrollContainer>
            <nav className="flex gap-x-6 border-b border-gray-200 pb-3">
                {categories.map(({ type, label }) => {
                    const href = `/content/${type.toLowerCase()}?sort=${searchParams.get('sort') || ContentUrlSortBy.DATE_DESC}`
                    const isActive = currentType === type.toLowerCase()

                    return (
                        <Link
                            key={label}
                            href={href}
                            className={classNames('relative text-sm whitespace-nowrap no-underline!', {
                                'text-black! after:absolute after:-bottom-[17px] after:left-0 after:h-[1px] after:w-full after:bg-black':
                                    isActive,
                                'text-gray-500! hover:text-black!': !isActive,
                            })}
                        >
                            {label}
                        </Link>
                    )
                })}
            </nav>
        </ScrollContainer>
    )
}
