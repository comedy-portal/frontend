'use client'

import { InputHTMLAttributes } from 'react'
import { Ref } from 'react'

import classNames from 'classnames'
import { TriangleAlertIcon } from 'lucide-react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    ref?: Ref<HTMLInputElement | null>
    error?: string
    className?: string
}

export const Input = (props: InputProps) => {
    const { ref, error, className, ...rest } = props

    return (
        <div>
            <div className="relative">
                <input
                    {...rest}
                    ref={ref}
                    className={classNames(
                        'placeholder:text-black-40 h-10 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm focus:outline-none disabled:cursor-no-drop disabled:opacity-30',
                        {
                            'border-red-500 pr-10': error,
                            'hover:border-gray-400 focus:border-gray-400': !error,
                        },
                        className,
                    )}
                />

                {error && (
                    <TriangleAlertIcon
                        size={16}
                        className="absolute top-1/2 right-4 -translate-y-1/2 transform text-red-500"
                    />
                )}
            </div>

            {error && <div className="mt-1 text-xs text-red-500">{error}</div>}
        </div>
    )
}
