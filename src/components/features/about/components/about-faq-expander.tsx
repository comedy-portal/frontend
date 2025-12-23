'use client'

import { useState } from 'react'

import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react'

type AboutFaqExpanderProps = {
    title: string
    children: React.ReactNode
}

export const AboutFaqExpander = ({ title, children }: AboutFaqExpanderProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div
                className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-200 p-4 font-bold transition-colors hover:bg-gray-200"
                onClick={toggleOpen}
            >
                <h3>{title}</h3>
                <div className="text-gray-500">{isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}</div>
            </div>
            {isOpen && <div className="p-4">{children}</div>}
        </div>
    )
}
