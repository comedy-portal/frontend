'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'

import { Keys } from '@/utils/enums/common'
import { useKeypress } from '@/utils/hooks/use-keypress'

type BottomSheetProps = {
    content: ReactNode
    isOpen: boolean
    onClose: () => void
    onClosed: () => void
}

export const BottomSheet = ({ content, isOpen, onClose, onClosed }: BottomSheetProps) => {
    const [translateY, setTranslateY] = useState(0)

    useKeypress(Keys.ESCAPE, onClose)

    const startY = useRef<number | null>(null)
    const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = ''

            if (closeTimerRef.current) {
                clearTimeout(closeTimerRef.current)
            }
        }
    }, [])

    useEffect(() => {
        if (isOpen) {
            return
        }

        closeTimerRef.current = setTimeout(() => {
            onClosed()
        }, 300)

        return () => {
            if (closeTimerRef.current) {
                clearTimeout(closeTimerRef.current)
            }
        }
    }, [isOpen, onClosed])

    const closeWithAnimation = () => {
        onClose()
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        startY.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (startY.current === null) return
        const diff = e.touches[0].clientY - startY.current
        if (diff > 0) setTranslateY(diff)
    }

    const handleTouchEnd = () => {
        if (translateY > 120) {
            closeWithAnimation()
        }
        setTranslateY(0)
        startY.current = null
    }

    return (
        <>
            <div
                onClick={closeWithAnimation}
                className={classNames(
                    'fixed inset-0 z-40 bg-black/40 transition-opacity duration-300',
                    isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
                )}
            />

            <div
                style={{
                    transform: `translateY(${isOpen ? translateY : 1000}px)`,
                    transition: translateY === 0 ? 'transform 300ms ease' : 'none',
                }}
                className="fixed right-0 bottom-0 left-0 z-50 flex max-h-[calc(100dvh-0.5rem)] flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl"
            >
                <div
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className="flex cursor-grab justify-center px-6 pt-4 pb-3 active:cursor-grabbing"
                >
                    <div className="h-1.5 w-12 rounded-full bg-gray-300" />
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto px-6 pb-[calc(2rem+env(safe-area-inset-bottom))]">
                    {content}
                </div>
            </div>
        </>
    )
}
