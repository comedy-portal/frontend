import { Metadata } from 'next'

import { Comedians } from '@/components/features/comedians/comedians/comedians'
import { createMetadata } from '@/utils/helpers/metadata'

// prettier-ignore
export const metadata: Metadata = createMetadata({
    title: 'Комики',
    description: 'Все стендап-комики на Камеди Портале. Биографии, лучшие спешлы, шоу, рейтинги и подписки на любимых комиков.',
    path: '/comedians',
    keywords: [
        'стендап комики',
        'русские комики',
        'стендап артисты',
        'биографии комиков',
        'лучшие комики',
        'комики России',
        'стендап',
        'юмор',
        'Камеди Портал',
    ],
    type: 'website',
})

export default function ComediansPage() {
    return <Comedians />
}
