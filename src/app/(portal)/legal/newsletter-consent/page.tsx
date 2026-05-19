import { Metadata } from 'next'

import { LegalNewsletterConsent } from '@/components/features/legal/legal-newsletter-consent'
import { createMetadata } from '@/utils/helpers/metadata'

export const metadata: Metadata = createMetadata({
    title: 'Согласие на получение рассылок',
    description: 'Добровольное согласие пользователя Камеди Портал на получение новостей и обновлений по email.',
    path: '/legal/newsletter-consent',
    type: 'website',
})

export default function LegalNewsletterConsentPage() {
    return <LegalNewsletterConsent />
}
