'use client'

import { useCallback } from 'react'
import RangeSlider from 'react-range-slider-input'

import { Button } from '@/components/ui/forms/button'
import { Radio } from '@/components/ui/forms/radio'

import 'react-range-slider-input/dist/style.css'

type RadioField = {
    type: 'radio'
    name: string
    label: string
    options: { label: string; value: string | number }[]
}

type RangeField = {
    type: 'range'
    label: string
    min: number
    max: number
    step: number
    minName: string
    maxName: string
}

export type FilterField = RadioField | RangeField

interface FiltersDialogProps<T extends Record<string, any>> {
    title: string
    fields: FilterField[]
    filters: T
    onChange: (next: T) => void
    onApply: () => void
    onReset: () => void
}

export function FiltersDialog<T extends Record<string, any>>({
    title,
    fields,
    filters,
    onChange,
    onApply,
    onReset,
}: FiltersDialogProps<T>) {
    const handleRangeChange = useCallback(
        (minName: string, maxName: string, values: readonly number[]) => {
            onChange({
                ...filters,
                [minName]: values[0],
                [maxName]: values[1],
            })
        },
        [filters, onChange],
    )

    return (
        <div className="flex w-full flex-col gap-y-6 sm:w-104">
            <h1 className="text-2xl font-bold">{title}</h1>

            {fields.map((field, idx) => {
                if (field.type === 'radio') {
                    return (
                        <div key={`${field.type}-${field.name}-${idx}`} className="flex flex-col gap-y-2">
                            <label className="font-bold">{field.label}</label>
                            {field.options.map(opt => (
                                <Radio
                                    key={opt.value}
                                    name={field.name}
                                    value={opt.value}
                                    checked={filters[field.name] === opt.value}
                                    onChange={() => onChange({ ...filters, [field.name]: opt.value })}
                                >
                                    {opt.label}
                                </Radio>
                            ))}
                        </div>
                    )
                }

                if (field.type === 'range') {
                    const minVal = filters[field.minName]
                    const maxVal = filters[field.maxName]
                    return (
                        <div
                            key={`${field.type}-${field.minName}-${field.maxName}-${idx}`}
                            className="flex flex-col gap-y-4"
                        >
                            <label className="font-bold">{field.label}</label>
                            <div className="flex items-center justify-between gap-x-4">
                                <div>{minVal}</div>
                                <RangeSlider
                                    min={field.min}
                                    max={field.max}
                                    step={field.step}
                                    value={[minVal, maxVal]}
                                    className="range"
                                    onInput={values => handleRangeChange(field.minName, field.maxName, values)}
                                />
                                <div>{maxVal}</div>
                            </div>
                        </div>
                    )
                }

                return null
            })}

            <div className="flex gap-x-2 pt-2">
                <Button onClick={onApply}>Применить</Button>
                <Button variant="outline" onClick={onReset}>
                    Сбросить
                </Button>
            </div>
        </div>
    )
}
