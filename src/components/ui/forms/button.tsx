import { ButtonHTMLAttributes } from 'react'

import classNames from 'classnames'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string
}

export const Button = (props: ButtonProps) => {
    const { className, ...rest } = props

    return (
        <button
            {...rest}
            className={classNames(
                'enabled:hover:bg-blue-active h-10 cursor-pointer rounded-lg bg-blue-500 px-6 text-sm text-white focus:outline-none disabled:cursor-no-drop disabled:opacity-30',
                className,
            )}
        >
            {props.children}
        </button>
    )
}
