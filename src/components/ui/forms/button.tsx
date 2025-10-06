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
                'cursor-pointer rounded-lg font-bold focus:outline-none disabled:cursor-no-drop disabled:opacity-30',
                {
                    'bg-gray-700 text-white enabled:hover:bg-gray-950': variant === 'primary',
                    'border border-gray-700 text-gray-700 enabled:hover:border-gray-950 enabled:hover:text-gray-950':
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
