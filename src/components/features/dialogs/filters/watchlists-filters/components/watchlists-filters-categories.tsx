import classNames from 'classnames'

import { categories } from '@/utils/dict/categories'
import { ContentType } from '@/utils/enums/common'

interface WatchlistsFiltersCategoriesProps {
    value: ContentType[]
    onChange: (next: ContentType[]) => void
}

export const WatchlistsFiltersCategories = ({ value, onChange }: WatchlistsFiltersCategoriesProps) => {
    const toggle = (type: ContentType) => {
        if (value.includes(type)) {
            onChange(value.filter(v => v !== type))
        } else {
            onChange([...value, type])
        }
    }

    return (
        <div className="flex flex-wrap gap-2">
            {categories.map(category => {
                const active = value.includes(category.type)

                return (
                    <button
                        key={category.type}
                        type="button"
                        onClick={() => toggle(category.type)}
                        className={classNames('cursor-pointer rounded px-3 py-1 text-xs transition', {
                            'bg-gray-600 text-white': active,
                            'bg-gray-200 text-gray-500 hover:bg-gray-600 hover:text-white': !active,
                        })}
                    >
                        {category.label}
                    </button>
                )
            })}
        </div>
    )
}
