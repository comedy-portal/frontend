'use client'

import { useState } from 'react'

import classNames from 'classnames'
import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react'

type FaqExpanderProps = {
    title: string
    children: React.ReactNode
}

export const FaqExpander = ({ title, children }: FaqExpanderProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div
                className={classNames(
                    'flex cursor-pointer items-center justify-between rounded-lg bg-gray-200 p-4 transition-colors hover:bg-gray-300',
                    {
                        'bg-gray-300': isOpen,
                    },
                )}
                onClick={toggleOpen}
            >
                <h3>{title}</h3>
                <div className="text-gray-500">{isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}</div>
            </div>
            {isOpen && <div className="p-4">{children}</div>}
        </div>
    )
}
