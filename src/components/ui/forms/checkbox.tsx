import { InputHTMLAttributes } from 'react'

import classNames from 'classnames'
import { CheckIcon } from 'lucide-react'

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>

export const Checkbox = (props: CheckboxProps) => {
    const { className, children, ...rest } = props

    return (
        <label className="flex cursor-pointer gap-x-2">
            <input type="checkbox" className="sr-only" {...rest} />
            <span
                className={classNames(
                    'mt-0.5 flex size-4 shrink-0 items-center justify-center rounded border border-gray-400',
                    props.disabled ? 'cursor-not-allowed bg-gray-200' : 'bg-white',
                    className,
                )}
            >
                {props.checked && <CheckIcon size={12} strokeWidth={3} className="text-gray-950" />}
            </span>
            {children && <span>{children}</span>}
        </label>
    )
}
