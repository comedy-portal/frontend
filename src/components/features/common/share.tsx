'use client'

import { ShareIcon } from 'lucide-react'

import { useToast } from '@/components/providers/toast-provider'
import { Button } from '@/components/ui/forms/button'
import { messages } from '@/messages'

type ShareProps = {
    title: string
    text?: string | null
    url: string
}

export const Share = ({ title, text, url }: ShareProps) => {
    const toast = useToast()
    const canShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function'

    const handleShare = async () => {
        try {
            await navigator.share({
                title,
                text: text || '',
                url,
            })
        } catch (err: unknown) {
            if (err instanceof DOMException && err.name === 'AbortError') {
                return
            }

            toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
        }
    }

    if (!canShare) {
        return null
    }

    return (
        <Button
            size="lg"
            variant="outline"
            className="flex w-full items-center justify-center gap-x-2 sm:hidden"
            onClick={handleShare}
        >
            <ShareIcon size={24} strokeWidth={2.5} />
            Поделиться
        </Button>
    )
}
