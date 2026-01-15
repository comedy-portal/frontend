import { ButtonHTMLAttributes } from 'react'

import classNames from 'classnames'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: 'sm' | 'md' | 'lg'
    variant?: 'primary' | 'outline'
    intent?: 'default' | 'danger'
}

const baseStyles = 'cursor-pointer rounded-lg font-bold focus:outline-none disabled:cursor-no-drop disabled:opacity-30'

const sizeStyles = {
    sm: 'h-8 px-4 text-xs',
    md: 'h-10 px-6 text-sm',
    lg: 'h-12 px-8 text-base',
}

const variantStyles = {
    primary: {
        default: 'bg-gray-700 text-white enabled:hover:bg-gray-950',
        danger: 'bg-red-500 text-white enabled:hover:bg-red-600',
    },
    outline: {
        default: 'border border-gray-700 text-gray-700 enabled:hover:border-gray-950 enabled:hover:text-gray-950',
        danger: 'border border-red-500 text-red-500 enabled:hover:border-red-600 enabled:hover:text-red-600',
    },
}

export const Button = ({ size = 'md', variant = 'primary', intent = 'default', className, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className={classNames(baseStyles, sizeStyles[size], variantStyles[variant][intent], className)}
        >
            {props.children}
        </button>
    )
}
