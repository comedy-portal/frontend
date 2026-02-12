'use client'

import { Ref, TextareaHTMLAttributes } from 'react'

import classNames from 'classnames'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    ref?: Ref<HTMLTextAreaElement | null>
    error?: string
    className?: string
}

export const Textarea = (props: TextareaProps) => {
    const { ref, error, className, value, maxLength, ...rest } = props
    const characterCount = typeof value === 'string' ? value.trim().length : 0

    return (
        <div className={className}>
            <div className="relative">
                {maxLength && (
                    <div className="absolute -top-7 right-0 text-xs text-gray-500">
                        {characterCount} / {maxLength}
                    </div>
                )}

                <textarea
                    {...rest}
                    ref={ref}
                    value={value}
                    className={classNames(
                        'w-full resize-none rounded-lg border border-gray-300 bg-white p-3 align-top focus:outline-none disabled:cursor-no-drop disabled:opacity-30',
                        {
                            'hover:border-gray-400 focus:border-gray-400': !error,
                            'border-red-500': error,
                        },
                    )}
                />
            </div>

            {error && <div className="mt-1 text-xs text-red-500">{error}</div>}
        </div>
    )
}
