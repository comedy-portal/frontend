import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/utils/redux/store'

export const useVenueCities = () => {
    const queries = useSelector((state: RootState) => state.api.queries)

    const venuesArrays = Object.values(queries)
        .filter(q => q?.endpointName === 'getVenues')
        .map(q => q?.data)
        .filter(Array.isArray)

    return useMemo(() => {
        const allVenues = venuesArrays.flat()
        const unique = Array.from(new Set(allVenues.map(v => v.city?.trim()).filter(Boolean)))

        return unique
            .sort((a, b) => a.localeCompare(b, 'ru', { sensitivity: 'base' }))
            .map(city => ({
                value: city,
                label: city,
            }))
    }, [venuesArrays])
}
