import { useEffect, useState } from 'react'

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window === 'undefined') {
            return false
        }

        return window.matchMedia('(max-width: 768px)').matches
    })

    useEffect(() => {
        const media = window.matchMedia('(max-width: 768px)')

        const listener = () => setIsMobile(media.matches)
        media.addEventListener('change', listener)

        return () => media.removeEventListener('change', listener)
    }, [])

    return isMobile
}
