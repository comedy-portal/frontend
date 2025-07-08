'use client'

import { Ref, TextareaHTMLAttributes, useEffect, useState } from 'react'

import classNames from 'classnames'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    ref?: Ref<HTMLTextAreaElement | null>
    error?: string
    className?: string
}

export const Textarea = (props: TextareaProps) => {
    const [characterCount, setCharacterCount] = useState<number>(0)

    const { ref, error, className, ...rest } = props

    useEffect(() => {
        if (typeof props.value === 'string') {
            setCharacterCount(props.value.trim().length)
        }
    }, [props.value])

    return (
        <div className={className}>
            <div className="relative">
                {props.maxLength && (
                    <div className="absolute -top-7 right-0">
                        {characterCount} / {props.maxLength}
                    </div>
                )}

                <textarea
                    {...rest}
                    ref={ref}
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
