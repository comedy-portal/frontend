import { Metadata } from 'next'

import { LegalPersonalDataConsent } from '@/components/features/legal/legal-personal-data-consent'
import { createMetadata } from '@/utils/helpers/metadata'

export const metadata: Metadata = createMetadata({
    title: 'Согласие на обработку персональных данных',
    description: 'Согласие пользователя Камеди Портал на обработку персональных данных при регистрации и использовании сервиса.',
    path: '/legal/personal-data-consent',
    type: 'website',
})

export default function LegalPersonalDataConsentPage() {
    return <LegalPersonalDataConsent />
}
