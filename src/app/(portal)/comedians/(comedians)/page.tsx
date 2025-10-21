import { Metadata } from 'next'

import { Comedians } from '@/components/features/comedians/comedians/comedians'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Комики',
}

export default function ComediansPage() {
    return <Comedians />
}
