import { Metadata } from 'next'

import { Comedians } from '@/components/features/comedians/comedians/comedians'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Комики - Comedy Portal',
}

export default function ComediansPage() {
    return <Comedians />
}
