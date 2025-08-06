'use client'

import React, { useEffect, useRef, useState } from 'react'

import classNames from 'classnames'
import { ChevronDown } from 'lucide-react'

type DropdownItem = {
    label: string
    icon?: React.ReactNode
    href?: string
    onClick?: () => void
}

type DropdownProps = {
    children: React.ReactNode
    items: DropdownItem[]
    className?: string
}

const Dropdown: React.FC<DropdownProps> = ({ children, items, className }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className={classNames('relative', className)} ref={ref}>
            <div onClick={() => setOpen(prev => !prev)}>{children}</div>

            {open && (
                <div className="ring-opacity-5 absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black">
                    <div className="py-1">
                        {items.map((item, index) => {
                            const content = (
                                <div className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    {item.icon}
                                    {item.label}
                                </div>
                            )

                            if (item.href) {
                                return (
                                    <a key={index} href={item.href} className="block" onClick={() => setOpen(false)}>
                                        {content}
                                    </a>
                                )
                            }

                            return (
                                <div
                                    key={index}
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
                </div>
            )}
        </div>
    )
}

export default Dropdown
