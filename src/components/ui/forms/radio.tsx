import { InputHTMLAttributes } from 'react'

import classNames from 'classnames'

type RadioProps = InputHTMLAttributes<HTMLInputElement>

export const Radio = (props: RadioProps) => {
    const { className, children, ...rest } = props

    return (
        <label className="inline-flex cursor-pointer items-center gap-2">
            <input type="radio" className="sr-only" {...rest} />
            <span
                className={classNames(
                    'flex size-5 items-center justify-center rounded-full border border-gray-400',
                    props.disabled ? 'cursor-not-allowed bg-gray-200' : 'bg-white',
                    className,
                )}
            >
                <span
                    className={classNames(
                        'size-2.5 rounded-full bg-gray-950',
                        props.checked ? 'opacity-100' : 'opacity-0',
                    )}
                />
            </span>
            {children && <span className="text-sm">{children}</span>}
        </label>
    )
}
