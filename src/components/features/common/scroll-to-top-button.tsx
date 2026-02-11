'use client'

import { useEffect, useRef, useState } from 'react'

import classNames from 'classnames'
import { ChevronsUpIcon } from 'lucide-react'

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false)
    const [scrollingUp, setScrollingUp] = useState(false)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setVisible(currentScrollY > 300)
            setScrollingUp(currentScrollY < lastScrollY.current)
            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return visible ? (
        <button
            onClick={scrollToTop}
            className="fixed right-6 bottom-6 z-40 flex items-center gap-x-1 rounded-full bg-gray-600 p-3 text-white hover:bg-gray-950"
            aria-label="Вернуться наверх"
        >
            <ChevronsUpIcon />
            <span className={classNames('sm:hidden!', scrollingUp ? 'block' : 'hidden')}>Вверх</span>
        </button>
    ) : null
}
