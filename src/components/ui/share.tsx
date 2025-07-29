'use client'

import { ShareIcon } from 'lucide-react'

import { messages } from '@/messages'
import { useToast } from '@/utils/providers/toast-provider'

type ShareProps = {
    title: string
    text?: string | null
    url: string
}

export const Share = ({ title, text, url }: ShareProps) => {
    const toast = useToast()

    const handleShare = async () => {
        if (!navigator.share) return

        try {
            await navigator.share({
                title,
                text: text || '',
                url,
            })
        } catch {
            toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
        }
    }

    return (
        <div onClick={handleShare} className="block sm:hidden" aria-label="Поделиться">
            <ShareIcon size={24} />
        </div>
    )
}
