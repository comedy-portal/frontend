import { ButtonHTMLAttributes } from 'react'

import classNames from 'classnames'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: 'sm' | 'md' | 'lg'
    variant?: 'primary' | 'outline'
    className?: string
}

export const Button = (props: ButtonProps) => {
    const { className, size = 'md', variant = 'primary', ...rest } = props

    return (
        <button
            {...rest}
            className={classNames(
                'cursor-pointer rounded-lg focus:outline-none disabled:cursor-no-drop disabled:opacity-30',
                {
                    'bg-blue-500 text-white enabled:hover:bg-blue-600': variant === 'primary',
                    'border border-blue-500 text-blue-500 enabled:hover:border-blue-600 enabled:hover:text-blue-600':
                        variant === 'outline',
                },
                {
                    'h-8 px-4 text-xs': size === 'sm',
                    'h-10 px-6 text-sm': size === 'md',
                    'h-12 px-8 text-base': size === 'lg',
                },
                className,
            )}
        >
            {props.children}
        </button>
    )
}
