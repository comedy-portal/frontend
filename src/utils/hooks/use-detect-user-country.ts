'use client'

import { useEffect } from 'react'

import { getUserCountry, setUserCountry } from '@/utils/redux/features/user-slice'
import { useAppDispatch, useAppSelector } from '@/utils/redux/hooks'

export function useDetectUserCountry() {
    const dispatch = useAppDispatch()
    const country = useAppSelector(getUserCountry)

    useEffect(() => {
        if (country) return

        async function detect() {
            try {
                const res = await fetch('https://ipapi.co/json/')
                const data = await res.json()

                if (data?.country_code) {
                    dispatch(setUserCountry(data.country_code))
                    return
                }
            } catch {}

            // fallback to navigator.language
            const code = navigator.language.split('-')[1]
            if (code) dispatch(setUserCountry(code))
        }

        detect()
    }, [country, dispatch])
}
