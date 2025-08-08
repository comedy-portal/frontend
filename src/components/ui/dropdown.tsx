'use client'

import React, { RefObject, useRef, useState } from 'react'

import classNames from 'classnames'
import { EllipsisVerticalIcon } from 'lucide-react'
import { useOnClickOutside } from 'usehooks-ts'

import Link from 'next/link'

type DropdownItem = {
    label: string
    icon?: React.ReactNode
    href?: string
    onClick?: () => void
}

type DropdownProps = {
    items: DropdownItem[]
    className?: string
}

export const Dropdown = ({ items, className }: DropdownProps) => {
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    // TODO: Consider switching to a different package or waiting for a fix
    // Issue: `useOnClickOutside` does not support a `null` ref
    // More details: https://github.com/juliencrn/usehooks-ts/issues/663
    useOnClickOutside(ref as RefObject<HTMLDivElement>, () => {
        setOpen(false)
    })

    return (
        <div className={classNames('relative', className)} ref={ref}>
            <div
                className={classNames(
                    'flex size-6 cursor-pointer items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-950',
                    {
                        'bg-gray-100 text-gray-950': open,
                    },
                )}
                onClick={() => setOpen(prev => !prev)}
            >
                <EllipsisVerticalIcon size={16} />
            </div>

            {open && (
                <div className="absolute top-full right-0 z-20 mt-1 w-48 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                    {items.map((item, index) => {
                        const content = (
                            <div className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-950">
                                {item.icon}
                                {item.label}
                            </div>
                        )

                        if (item.href) {
                            return (
                                <Link
                                    key={`dropdown-item-${index}`}
                                    href={item.href}
                                    className="block"
                                    onClick={() => setOpen(false)}
                                >
                                    {content}
                                </Link>
                            )
                        }

                        return (
                            <div
                                key={`dropdown-item-${index}`}
                                onClick={() => {
                                    item.onClick?.()
                                    setOpen(false)
                                }}
                            >
                                {content}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
