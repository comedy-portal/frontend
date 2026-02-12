'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

type InstallPWAButtonProps = {
    width: number
    height: number
}

function detectIOS() {
    if (typeof window === 'undefined') return false
    return /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase())
}

function detectStandalone() {
    if (typeof window === 'undefined') return false
    return 'standalone' in window.navigator && window.navigator.standalone === true
}

export default function InstallPWAButton({ width, height }: InstallPWAButtonProps) {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)

    const isIos = detectIOS()
    const isStandalone = detectStandalone()

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault()
            setDeferredPrompt(e as BeforeInstallPromptEvent)
        }

        window.addEventListener('beforeinstallprompt', handler)
        return () => window.removeEventListener('beforeinstallprompt', handler)
    }, [])

    const showButton = (isIos && !isStandalone) || deferredPrompt !== null

    const handleInstallClick = async () => {
        if (deferredPrompt) {
            await deferredPrompt.prompt()
            const choice = await deferredPrompt.userChoice
            console.log(choice.outcome === 'accepted' ? 'PWA установлено' : 'Пользователь отказался от установки')
            setDeferredPrompt(null)
            return
        }

        if (isIos) {
            alert('Чтобы установить приложение, нажмите "Поделиться" → "На экран Домой"')
        } else {
            alert('Установка недоступна')
        }
    }

    if (!showButton) return null

    return (
        <Image
            src="/images/pwa.svg"
            width={width}
            height={height}
            className="cursor-pointer align-top"
            onClick={handleInstallClick}
            alt="Install Comedyportal App"
        />
    )
}
