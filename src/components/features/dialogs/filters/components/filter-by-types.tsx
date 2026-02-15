import classNames from 'classnames'

import { contentTypesDict } from '@/utils/dict/content-types'
import { ContentType } from '@/utils/enums/common'

type FilterByTypesProps = {
    value: ContentType[]
    onChange: (value: ContentType[]) => void
}

export const FilterByTypes = ({ value, onChange }: FilterByTypesProps) => {
    const toggle = (type: ContentType) => {
        if (value.includes(type)) {
            onChange(value.filter(v => v !== type))
        } else {
            onChange([...value, type])
        }
    }

    return (
        <div className="flex flex-col gap-y-2">
            <label className="text-sm font-semibold">По типу контента:</label>
            <div className="flex flex-wrap gap-2">
                {contentTypesDict.map(contentType => {
                    const active = value.includes(contentType.slug)

                    return (
                        <button
                            key={`reviews-filter-types-item-${contentType.slug}`}
                            type="button"
                            onClick={() => toggle(contentType.slug)}
                            className={classNames(
                                'cursor-pointer rounded px-3 py-1 text-xs',
                                active
                                    ? 'bg-gray-500 text-white'
                                    : 'bg-gray-200 text-gray-500 hover:bg-gray-500 hover:text-white',
                            )}
                        >
                            {contentType.label}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
