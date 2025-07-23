'use client'

import { ShareIcon } from 'lucide-react'

import { messages } from '@/messages'

type ShareProps = {
    title: string
    text?: string | null
    url: string
}

export const Share = ({ title, text, url }: ShareProps) => {
    const handleShare = async () => {
        if (!navigator.share) return

        try {
            await navigator.share({
                title,
                text: text || '',
                url,
            })
        } catch (err: any) {
            if (err.name !== 'AbortError') {
                console.error(messages.COMMON_ERROR)
            }
        }
    }

    return (
        <div onClick={handleShare} className="block sm:hidden" aria-label="Поделиться">
            <ShareIcon size={24} />
        </div>
    )
}
