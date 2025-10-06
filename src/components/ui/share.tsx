'use client'

import { useEffect, useState } from 'react'

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
    const [canShare, setCanShare] = useState(false)

    useEffect(() => {
        if (typeof navigator !== 'undefined' && !!navigator.share) {
            setCanShare(true)
        }
    }, [])

    const handleShare = async () => {
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

    if (!canShare) {
        return null
    }

    return (
        <Button
            size="lg"
            variant="outline"
            className="flex w-full items-center justify-center gap-x-2"
            onClick={handleShare}
        >
            <ShareIcon size={24} strokeWidth={2.5} />
            Поделиться
        </Button>
    )
}
