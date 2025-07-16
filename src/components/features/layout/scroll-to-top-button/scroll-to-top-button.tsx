'use client'

import { useEffect, useState } from 'react'

import { ChevronsUpIcon } from 'lucide-react'

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return visible ? (
        <button
            onClick={scrollToTop}
            className="fixed right-6 bottom-6 z-50 cursor-pointer rounded-full bg-gray-600 p-2 text-white transition-all hover:bg-gray-950"
            aria-label="Вернуться наверх"
        >
            <ChevronsUpIcon />
        </button>
    ) : null
}
