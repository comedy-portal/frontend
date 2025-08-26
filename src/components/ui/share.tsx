'use client'

import { ShareIcon } from 'lucide-react'

import { Button } from '@/components/ui/forms/button'
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
        <Button
            size="lg"
            variant="outline"
            className="flex w-full items-center justify-center gap-x-2"
            onClick={handleShare}
        >
            <ShareIcon size={24} />
            Поделиться
        </Button>
    )
}
