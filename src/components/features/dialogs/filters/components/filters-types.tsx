import classNames from 'classnames'

import { contentTypesDict } from '@/utils/dict/content-types'
import { ContentType } from '@/utils/enums/common'

type FiltersTypesProps = {
    value: ContentType[]
    onChange: (next: ContentType[]) => void
}

export const FiltersTypes = ({ value, onChange }: FiltersTypesProps) => {
    const toggle = (type: ContentType) => {
        if (value.includes(type)) {
            onChange(value.filter(v => v !== type))
        } else {
            onChange([...value, type])
        }
    }

    return (
        <div className="flex flex-wrap gap-2">
            {contentTypesDict.map(contentType => {
                const active = value.includes(contentType.slug)

                return (
                    <button
                        key={`reviews-filter-types-item-${contentType.slug}`}
                        type="button"
                        onClick={() => toggle(contentType.slug)}
                        className={classNames('cursor-pointer rounded px-3 py-1 text-xs transition', {
                            'bg-gray-600 text-white': active,
                            'bg-gray-200 text-gray-500 hover:bg-gray-600 hover:text-white': !active,
                        })}
                    >
                        {contentType.label}
                    </button>
                )
            })}
        </div>
    )
}
