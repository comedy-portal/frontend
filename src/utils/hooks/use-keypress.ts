import { useEffect } from 'react'

import { Keys } from '@/utils/enums/common'

export function useKeypress(key: Keys, action: () => void) {
    useEffect(() => {
        function onKeyup(e: KeyboardEvent) {
            if (e.key === key) action()
        }
        window.addEventListener('keyup', onKeyup)
        return () => window.removeEventListener('keyup', onKeyup)
    }, [action, key])
}
